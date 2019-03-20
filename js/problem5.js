var totalBooksByKV = 0

books.forEach(function(book){
  if (book.author == "Kurt Vonnegut") {
    totalBooksByKV += 1
  }
})

console.log("Total books by Kurt Vonnegut: " + totalBooksByKV)
