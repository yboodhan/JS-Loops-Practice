var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]

// Your code here
// Remember to use REDUCE!
const letters = (a,b) => {
    return a+b;
}

let totalNumberOfLetters = names.reduce(letters).length;

console.log("Total letters: " + totalNumberOfLetters)
