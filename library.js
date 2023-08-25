function Book(title, author) 
{
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
  
const library = [];
  
function addBook(title, author) 
  {
    const newBook = new Book(title, author);
    library.push(newBook);
  }
  
function borrowBook(title) 
  {
    const book = library.find(book => book.title === title);
    if (book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        console.log(`You have borrowed "${book.title}" by ${book.author}.`);
      } else {
        console.log(`"${title}" is not available for borrowing.`);
      }
    } else {
      console.log(`"${title}" is not found in the library.`);
    }
  }

function returnBook(title) 
  {
    const book = library.find(book => book.title === title);
    if (book) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        console.log(`You have returned "${book.title}" by ${book.author}.`);
      } else {
        console.log(`"${title}" has already been returned.`);
      }
    } else 
    {
      console.log(`"${title}" is not found in the library.`);
    }
  }
  
function listBooks() 
  {
    console.log("Library Inventory:");
    library.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, Availability: ${book.isAvailable ? "Available" : "Borrowed"}`);
    });
  }

