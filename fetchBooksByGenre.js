import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';

const searchTerms = ['science fiction', 'music', 'science', 'technology', 'animal stories'];

const fetchBookDetails = async (olid) => {
  const detailsUrl = `https://openlibrary.org/works/${olid}.json`;
  try {
    const response = await fetch(detailsUrl);
    const bookDetails = await response.json();
    let description = bookDetails.description
      ? typeof bookDetails.description === 'string'
        ? bookDetails.description
        : bookDetails.description.value
      : null;
    return { description };
  } catch (error) {
    console.error(`Error fetching details for OLID: ${olid}`, error);
    return { description: 'No description available' };
  }
};

const fetchBooks = async (query, limit = 5) => {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    query
  )}&limit=${limit}&language=eng`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const booksWithDetails = await Promise.all(
      data.docs.map(async (book) => {
        let description = book.description
          ? typeof book.description === 'string'
            ? book.description
            : book.description.value
          : null;

        if (!description) {
          const details = await fetchBookDetails(book.key.split('/').pop());
          description = details.description;
        }

        return {
          id: book.key.split('/').pop(),
          title: book.title,
          author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
          publishYear: book.first_publish_year,
          description: description || 'No description available',
          genre: query,
          pages: book.number_of_pages_median ? book.number_of_pages_median : 'Unknown pages',
          cover: book.cover_i
            ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : 'No Cover Available',
        };
      })
    );

    return booksWithDetails;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

const collectAndSaveBooks = async () => {
  let allBooks = [];
  for (const term of searchTerms) {
    const booksForTerm = await fetchBooks(term);
    allBooks = allBooks.concat(booksForTerm);
    console.log(`Fetched ${booksForTerm.length} books for term: ${term}`);
  }

  await writeFile('books.json', JSON.stringify(allBooks, null, 2));
  console.log('All books data has been saved!');
};

collectAndSaveBooks();
