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

var totalBooksByKV = 0

books.forEach((book) => {
    if (book.author == 'Kurt Vonnegut') {
        totalBooksByKV++
    }
})

console.log("Total books by Kurt Vonnegut: " + totalBooksByKV)
