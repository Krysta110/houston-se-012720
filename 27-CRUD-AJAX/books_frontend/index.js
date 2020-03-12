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

  const delBtn  = document.createElement("button")
  delBtn.innerText = "delete book"

  div.append(img, h3, p, btn, delBtn);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}


fetch("http://localhost:3000/books")
.then(res => res.json())
.then(books => showBooks(books)) 