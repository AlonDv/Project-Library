const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages, read) {
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
}


function appendNode(object) {
  let bookDiv = document.createElement("div");
  bookDiv.classList = "div";
  document.body.appendChild(bookDiv);
  const headline = document.createElement("div");
  bookDiv.appendChild(headline);
  headline.textContent = (object.title);
  const body = document.createElement("div");
  bookDiv.appendChild(body);
  body.textContent = `author: ${object.author}, pages: ${object.pages} haveRead: ${object.read}`;
}

function display() {
  document.body.replaceChildren();
  myLibrary.forEach(appendNode);
}



