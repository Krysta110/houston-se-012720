function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  // book_list.appendChild(div); 
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

  //add all elements to div
  div.append(img, h3, p);
  // div.append(h3);
  // div.append(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// what happens when books isn't defined?
// showBooks(books);

fetch("http://localhost:3000/books")
// .then(res => {return res.json()})
.then(res => res.json())
// .then(data => showBooks(data))
.then(books => showBooks(books))
// .catch() 



// console.log("I before fetch")

// fetch("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
// .then(function(res){
//   return res.json()
// })
// .then(function(data){
//   // debugger
//   console.log("I am inside .then")
// })

// console.log("I after fetch")



// let abc = async() => {
//   let a = await(100 +10)
//   let c = 100 + a
//   let b = c + a 
// }