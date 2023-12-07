//Find the words that's starts and ends in the given string

let na= "I'm from pakistan this Muhammad Ameer Hamza";
console.log(na.startsWith("i") ? "Started":"Not started")
console.log(na.endsWith("a") ? "Started":"Not started")

//Extract the amount in the given string
let statement = "Please give me Rs 19230";
console.log(statement.slice("Please give me Rs ".length));

//Change the specific chracters from given string
var str = "I'm software Engineer";
//NOTE: Strings are immutable means we can't change it's chracters