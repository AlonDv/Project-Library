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
  display();
}


function appendNode(book) {
  const cardTemplate = document.querySelector("#cardTemplate");
  const container = document.querySelector(".bookContainer");
  const newBook = cardTemplate.content.cloneNode(true);
  const title = newBook.querySelector(".title");
  title.textContent = book.title
  const autorText = newBook.querySelector(".author");
  autorText.textContent = book.author
  const pages = newBook.querySelector(".pages");
  pages.textContent = book.pages;
  const readDisplay = newBook.querySelector(".readDisplay");
  const readP = readDisplay.querySelector(".readParagraph");
  const icon = readDisplay.querySelector("i");
  if (book.read) {
    readP.textContent = "Read";
    icon.className = "fa-solid fa-circle-check";
    readDisplay.style.backgroundColor = "rgb(221, 245, 229)";
    readDisplay.style.color = "green";
    readDisplay.style.border = "1px solid green";
  }
  else {
    readP.textContent = "Not read";
    icon.className = "fa-solid fa-x"
    readDisplay.style.backgroundColor = "tomato";
    readDisplay.style.color = "white";
    readDisplay.style.border = "1px solid red";
  }

  container.appendChild(newBook);
}


function display() {
  const container = document.querySelector(".bookContainer");
  container.replaceChildren();
  myLibrary.forEach(appendNode);
}



