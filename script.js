let myLibrary = [];

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

const container = document.querySelector(".bookContainer");
container.addEventListener("click", removeCard);
container.addEventListener("click", HandleToggleRead);

function appendNode(book) {
  const cardTemplate = document.querySelector("#cardTemplate");
  const container = document.querySelector(".bookContainer");
  const newBook = cardTemplate.content.cloneNode(true);
  const removeBtn = newBook.querySelector(".removeBtn");
  removeBtn.dataset.id = book.id;
  const toggleReadBtn = newBook.querySelector(".toggleReadBtn");
  toggleReadBtn.dataset.id = book.id
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

const newBookBtn = document.querySelector(".newBookBtn");
function toggleForm() {
  resetForm();
  const form = document.querySelector(".form");
  if (form.style.display == "block") {
    form.style.display = "none";
  }
  else {
    form.style.display = "block";
  }
}

newBookBtn.addEventListener("click", toggleForm);

const cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener("click", toggleForm);

const pagesInput = document.querySelector("#pages");
const authorInput = document.querySelector("#author");
const readSelect = document.querySelector("#read");
const titleInput = document.querySelector("#title");

function resetForm() {

  pagesInput.value = "";
  authorInput.value = "";
  titleInput.value = "";
  readSelect.value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value, Boolean(readSelect.value))
  toggleForm();
  display();
}
const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function removeCard(event) {
  const button = event.target;
  if (button.className == "removeBtn") {
    console.log(button.dataset.id);
    myLibrary = myLibrary.filter((item) => {
      if (item.id == button.dataset.id) {
        console.log(`${item.id} = ${button.dataset.id}`);
        return false
      }

      else {
        return true;
      }
    })
  }
  console.log(myLibrary);
  display();
}


Book.prototype.toggleRead = function () {
  this.read = (this.read) ? false : true;
}
function HandleToggleRead(event) {
  const readButton = event.target;
  const id = readButton.dataset.id;


  if (readButton.className == "toggleReadBtn") {
    const idElement = myLibrary.find((item) => {
      return item.id == id;
    });
    idElement.toggleRead();
  }
  display();
}