const numbers = ["2", "3", "7", "8", "5", "6", "9","0096"]
// numbers[0]
// numbers[1]
// numbers[2]
let sum = "";

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    sum += element + "-" + element + "-"
}
const i = numbers.length -2 // numbers.length = 6
console.log(numbers[i]);