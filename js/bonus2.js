var books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
]

function findAuthorsBookCount(allBooks, authorName) {
  var totalBooksByAuthor = 0;
  allBooks.forEach((book) => {
    if (book.author == authorName) {
      totalBooksByAuthor++;
    }
  })
  return totalBooksByAuthor;
}

var author1 = "Kurt Vonnegut"
var author2 = "Robert Heinlein"
var author3 = "Arthur C. Clarke"

console.log("I have " + findAuthorsBookCount(books, author1) + " books by " + author1 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author2) + " books by " + author2 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author3) + " books by " + author3 + " in my library.")
