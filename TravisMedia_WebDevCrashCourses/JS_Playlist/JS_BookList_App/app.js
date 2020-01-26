// Book class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class: Handle UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      const td = el.parentElement.parentElement;
      const list = document.querySelector('#book-list');
      list.removeChild(td);
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    console.log(div);
    // where to put it
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // <div class="alert alert-success">Message</div>

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store class: Handles Storage (within the browser)
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = localStorage.getItem('books');
      // console.log(books);
      books = JSON.parse(books);
      // console.log(books);
    }

    return books;
  }

  static addBook(book) {
    let books = Store.getBooks();

    books.push(book);
    console.log(books);

    books = JSON.stringify(books);
    console.log(books);
    localStorage.setItem('books', books);
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (books.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // init book
    const book = new Book(title, author, isbn);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // Show success Message
    UI.showAlert('Book added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: remove a book
document.querySelector('#book-list').addEventListener('click', e => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success Message
  UI.showAlert('Book removed', 'success');
});
