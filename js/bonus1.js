var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]

var totalNumberOfLetters = names.reduce(function(name1, name2){
  return name1 + name2
})

console.log("with reduce, total letters: " + totalNumberOfLetters)
