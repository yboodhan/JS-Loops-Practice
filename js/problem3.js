var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]
var totalNumberOfLetters = 0

names.forEach((name) => {
    totalNumberOfLetters += name.length;
})

console.log("Total letters: " + totalNumberOfLetters)
