# JS-Loops-Practice

## Goal

Understanding the forEach iterator.

## Directions

Use the forEach function to solve each of the following problems. Once you think you have the solution, please test your code by running (executing) it on your local machine, with the following command:

```
node js/problem1.js
```

If you get the solutions to questions 1 through 5, please attempt the bonus questions!

### Question 1

Use a forEach function that prints out each name in the file `problem1.js` in the `js` folder of this repository. Here is some starter code for you:

```javascript
var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]

// Write a forEach function here.
```

### Question 2

Using the same names array from problem 1, write a forEach function that creates a NEW array with capitalized names. Put this solution in the file called `problem2.js` in the `js` folder. Here is some starter code for you:

```javascript
var capitalizedNames = []

// forEach function here

console.log(capitalizedNames)
```


### Question 3

Using the same names array, write a forEach function that counts the total amount of letters in all the names combined (e.g., "Bob" is 3 letters, + "Sally" with 5 letters, so in total they have 8 letters). Put this solution in the file called `problem3.js` in the `js` folder. Here is some starter code for you:

```javascript
var totalNumberOfLetters = 0

// Write a forEach function here

console.log("Total letters: " + totalNumberOfLetters)
```

### Question 4

An array of book objects is defined below. Use a forEach function to print out the title of each book. Put this solution in the file called `problem4.js` in the `js` folder. Here is some starter code for you:

```javascript
var books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
];

// Your forEach function goes here
```

### Question 5

Using the books array from the previous problem, write a forEach function that counts how many books are written by `Kurt Vonnegut`. Put this solution in the file called `problem5.js` in the `js` folder. Here is some starter code for you:

```javascript
var totalBooksByKV = 0

// Write forEach function here

console.log("Total books by Kurt Vonnegut: " + totalBooksByKV)
```

## Bonuses

### Bonus 1

Rewrite Question 3, but with the reduce iterator.

### Bonus 2

Take the logic you came up with in question 5 and genericize it into a function that accepts author and the books array as parameters. Put this solution in the file called `problem6.js` in the `js` folder. Here is some starter code for you:

```javascript
function findAuthorsBookCount(allBooks, authorName){
  // YOUR CODE HERE!
}

var author1 = "Kurt Vonnegut"
var author2 = "Robert Heinlein"
var author3 = "Arthur C. Clarke"

console.log("I have " + findAuthorsBookCount(books, author1) + " books by " + author1 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author2) + " books by " + author2 + " in my library.")
console.log("I have " + findAuthorsBookCount(books, author3) + " books by " + author3 + " in my library.")
```
