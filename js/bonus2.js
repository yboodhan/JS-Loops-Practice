function findAuthorsBookCount(allBooks, authorName){
  var totalBooksByAuthor = 0
  allBooks.forEach(function(book) {
    if (book.author == authorName) {
      totalBooksByAuthor++
    }
  });
  return totalBooksByAuthor
}

var author1 = "Kurt Vonnegut"
var author2 = "Robert Heinlein"
var author3 = "Arthur C. Clarke"

console.log("I have " + findAuthorsBookCount(books, author1) + " books by " + author1 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author2) + " books by " + author2 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author3) + " books by " + author3 + " in my library.")
