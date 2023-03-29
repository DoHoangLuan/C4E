//     let s = ["text là 1 ", "text là 12", "Text là 424", "Không phải là text"]
// let shortestString = s[0];
// let b = [];
// let newS = [];
// let sumA = "";

// for ( let i = 0; i < s.length; i++){
//     const element = s[i] 
//     if (element.length < shortestString.length){
//         shortestString = element
//     }
//     if (element.includes("text")){
//         b.push(element)
//     }
//     if (i < 3){
//         newS.push(element)
//     } 

//     if( i < s.length - 1 ){
//         sumA += element +  "-"
//     } else {
//         sumA += element
//     }
// }

// console.log(sumA);


let a = [1, 2, 3, 4, 5, 6];
let b = [2, 6, 56, 8, 5, 5];
let isAllInB = true;
a.forEach(val => {
    if (!b.includes(val)) {
        isAllInB = false
    }
})

    let sum = 0
    a.forEach(function(element){
        sum += element
    })
    
    let isChiahetchoSumA = false;
    b.forEach(function(element){
        if(element % sum === 0){
            isChiahetchoSumA = true;
        }
    })
    // if(isChiahetchoSumA){
    //     console.log("Có phần tử D1 chia hết cho tổng D2");
    // }
    // else {
    //     console.log("Không có phần tử D1 chia hết cho tổng D2");
    // }

let newS = a.concat(b)
let newArray = []
newS.forEach(val => {
    if(val % 2 == 0){
    newArray.push(val)
    }
})
console.log(newArray);