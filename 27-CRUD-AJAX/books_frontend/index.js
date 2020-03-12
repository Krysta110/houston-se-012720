function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.append(div); 

}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  const btn  = document.createElement("button")
  if(book.read){
    btn.innerText = "Mark unread"
  }
  else{
    btn.innerText = "Mark read"
  }

  btn.addEventListener("click", () => {
    // fetch("http://localhost:3000/books/"+ book.id)

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        read: !book.read
      })
    }

    fetch(`http://localhost:3000/books/${book.id}`, configObj)
    .then(res => res.json())
    .then(updatedBook => {
      // if(updatedBook.read){
      //   btn.innerText = "Mark unread"
      // }
      // else{
      //   btn.innerText = "Mark read"
      // }
      updatedBook.read ? btn.innerText = "Mark unread" :   btn.innerText = "Mark read"
    })

  })

  const delBtn  = document.createElement("button")
  delBtn.innerText = "delete book"

  delBtn.addEventListener("click", () => {

    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(idk => {
      div.remove()
    })
  })

  div.append(img, h3, p, btn, delBtn);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

//Get all the books
fetch("http://localhost:3000/books")
.then(res => res.json())
.then(books => showBooks(books)) 
.catch(errors => console.log(errors))// catching errors


//create a new book
const form = document.getElementById('new-book')

form.addEventListener("submit", () => {
  event.preventDefault()

  // debugger
  const t = document.getElementById('book-title').value //title input
  const a = document.getElementById('book-author').value //author input
  const cover = document.getElementById('book-cover').value//cover input

  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: t,
      //title: title,
      //title,
      author: a,
      read: false,
      img: cover
    })
  })
  .then(res => res.json())
  .then(newBook => { 
    addBook(newBook)
    form.reset() //pessimistic rendering
  })

  // form.reset() //optimistic rendering
})