// let names =[
//     "Hoang Ky",
//     "Hoang Luan",
//     "Anh Tu"
// ];
// console.log(names);



// let numbers =[1,100,40,3,20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich,isHandsome,hasGirlfriend]

// console.log(features);


// const array1 = ["a","b",c];
// const array2 = ["a","b","c"];
// Bài 1:
// let arr = [];
// let n = Number(prompt("Nhập số n:"));
// for (let i = 0; i < n; i++) {
//   let randomNum = Math.floor(Math.random()*100); 
//   arr.push(randomNum); 
// }
// console.log(arr); 

// let n = Number(prompt("nhập số n:"));
// if (n < 2 ) {
//     alert ("N phải lớn hơn 2 ")
// }
// let arr = [1,2];
// else ()

// 1. Tính tích các phần tử trong mảng đó 
// let arr = [1,2,5,-7,10,-15,20]
// for (i = 0; i < arr.length ; i++ ){
// }
// console.log(arr);

// let arr = [ 1,2];
// let n = Number(prompt("Nhập số n:"));
// if ( n < 2) {
//     alert ("N phải lớn hơn 2")
// }
// while(arr.length < n){
//     arr.unshift(0);
// }
// console.log(arr);

// let arr = [1,6,9,5,2,5];

// while (arr.length > 1 ){
//     arr.pop(1);
// }
// console.log(arr)

// let arr = [1,2,3,4,5,6,8];
// let multiple = 1;

// for ( let i =0; i < arr.length;i++ ){
//     let numberFor = arr[i]
//     multiple = numberFor * multiple
// }
// console.log(multiple);

// let arr = [1,2,3,4,5,6,8];
// let number = null; // Khởi tạo giá trị lớn nhất


// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0 && arr[i] < number){ // Nếu chia hết cho 2 và nhỏ hơn giá trị hiện tại của minEven
//         number = arr[i]; // Gán giá trị mới cho minEven
//     } 
// }

// if(number === null){ // Kiểm tra nếu không tìm thấy số chẵn trong mảng
//     console.log("Không tìm thấy số chẵn trong mảng");
// } else {
//     console.log("Số chẵn nhỏ nhất trong mảng là: " + number); // In ra kết quả
// }






let arr2 = [1,2,3,4,5,6,8,9]
let min = Number.MAX_VALUE

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i]
    if (min > element && element % 2 == 0){
        min = element
    }
}
console.log(min);

let arr3 = [88,6,7.4,3,3,2,5,3154,54,64]
let max = Number.MIN_VALUE

for (let i=0; i < arr3.length;i++){
    const element = arr3[i]
    if (max < element && element % 3 ==0){
        max = element
    }
}

// 4. Tính giá trị trung bình của mảng 
let arr4 = [88,6,7.4,3,3,2,5,3154,54,64]
let sum = 0
for ( let i = 0; i < arr4.length; i++){
    sum += arr3[i] 
}
const avg = sum / arr4.length
console.log(avg);


// 5. Lọc ra các số nguyên tố trong mảng 
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const arr5 = [88,6,7.4,3,3,2,5,3154,54,64];
  const primes = [];
  
  for (let num of arr5) {
    if (isPrime(Math.floor(num))) {
      primes.push(num);
    }
  }
  
  console.log(primes); 

//6 . Kiểm tra xem trong mảng có số nhỏ hơn 10 đúng không 

var arr7 = [88,6,7.4,3,3,2,5,3154,54,64];
var isLessThanTen = false;

for (var i=0; i<arr7.length; i++) {
    if (arr7[i] < 10) {
        isLessThanTen = true;
        break;
    }
}

if (isLessThanTen) {
    console.log("Có số nhỏ hơn 10 trong mảng");
} else {
    console.log("Không có số nhỏ hơn 10 trong mảng");
}

  
//7 . Lọc trong mảng có số nhỏ hơn 10 đúng không

var arr8 = [88,6,7.4,3,3,2,5,3154,54,64];

var result = []
for ( let i = 0; i < arr8.length; i++){
    if ( arr8[i] < 10) {
        result.push(arr8[i]);
    }
}
console.log(result);

// 8. Kiểm tra các phần tử trong mảng có lớn hơn 20 không 
let arr9 = [88,6,7.4,3,3,2,5,3154,54,64];
let isBiggerThanTwenty = false;
 for(let i = 0; i <arr9.length; i++){
    if (arr9[i] > 20 ) {
        isBiggerThanTwenty = true; 
        break;
    }
 }
if (isBiggerThanTwenty) {
    console.log("Có phần tử trong mảng lớn hơn 20");
} else {
    console.log("Không có phần tử trong mảng lớn hơn 20");
}

//9 .Nhập vào số n cho đến khi n là 1 số trong mảng s 

let s = [1, 2, 3, 4, 5];
let n = null;

while (!s.includes(n)) {
  n = parseInt(prompt("Vui lòng nhập số n:"));
} // includes tìm giá trị trong mảng đó 
console.log(`Giá trị của n là: ${n}`);

