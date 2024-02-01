# OpenLibrary-Genre-Book-Fetcher

This Node.js script is designed to interact with the Open Library API, fetching books from a variety of genres and compiling essential information into a unified JSON file. It's perfect for developers and data enthusiasts looking to gather a diverse collection of book data for projects, analysis, or personal interest.

## Features

- **Multiple Genres**: Fetches books across a range of predefined genres, making the dataset rich and varied.
- **Detailed Book Information**: Gathers comprehensive details about each book, including title, author, publication year, description, genre, page count, and cover image URL.
- **Single JSON Output**: Compiles all book data into one convenient JSON file, simplifying data handling and storage.

## Usage

1. **Set Up Your Environment**: Ensure Node.js is installed on your system.
2. **Install Dependencies**: Run `npm install` to install required dependencies, including `node-fetch`.
3. **Customize Search Terms**: Edit the `searchTerms` array in the script to include the genres or keywords you're interested in.
4. **Run the Script**: Execute `node fetchBooksByGenre.js` to start the data fetching process.
5. **Check the Output**: Once completed, the script will save the fetched book data in `books.json`.

### Example Search Terms

**Genres**
Fantasy, Mystery, Romance, Thriller, Historical Fiction, Biography, Self-Help, Science Fiction, Horror, Young Adult

**Topics**
Cooking, Cookbooks, Travel, Art, Music, Science, Technology, Philosophy, Politics, Religion,Health


**Authors**
Stephen King, Agatha Christie, George Orwell, Ernest Hemingway, Jane Austen, Charles, Dickens, William Shakespeare


**Classics**
Classic Literature, Modern Classics, Shakespeare, Greek Mythology, Fairy Tale, Epic, Poetry, Victorian Novels, American Classics, Gothic Fiction, Renaissance Literature

**Contemporary themes**
Climate Change, Artificial Intelligence, Space Exploration, Digital Transformation, Globalization, Mindfulness, Diversity and Inclusion, Sustainable Living, Blockchain
Cybersecurity

**Children and young people**
Children's Books, Picture Books, Middle Grade, Teen Fiction, Educational, Animal Stories, Adventure, Fantasy for Kids, Science for Kids, Historical for Kids

## Customization

You can easily customize the script by modifying the `searchTerms` array with your desired genres or keywords. The script's modular design allows for easy expansion, such as adding more detailed book information or integrating additional APIs.
