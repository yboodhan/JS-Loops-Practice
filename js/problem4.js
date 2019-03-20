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

books.forEach(function(book){
  console.log(book["title"])
  // Also, an alternative way of doing the same thing:
  console.log(book.title) // <-- prints the same as line above it
})
