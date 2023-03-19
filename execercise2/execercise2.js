// 1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây ?
// Giải thích vì sao có kết quả đó ?
  x = true, y = true, z = false 
var x = true
var y = true 
var z = false

 x && y && z 
false
 x && y && !z 
true
(x && y ) || z 
true
 (x && y ) || !z 
true
x && (y || z)
true
 x && !(y || z) 
false
x && (y || !z)
true
x && (!y || z)
false
  
// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây ?
// Giải thích vì sao có kết quả đó ?

name = "AAA" , age = 20 , isGood = true

age + 10 = 30 
age % 3 = 2 
name + "BBB" = "AAABBB"
!isGood = false
 
name == "aaa" && age >= 20 
false
name != "aaa" && isGood 
true
!(age < 10) && !isGood
false 

// 3. Hãy khai báo các biến và cho kết quả của các phép toán dưới đây?
// Giải thích vì sao có kết quả đó ?
a = 10, b = 20, c = 30, d="40"
a + b + c = 60  // + các number bình thường 
a - b/c = 9.3 // */ trước + trừ sau 
a - (b*c)= -590 // () được ưu tiên tính trước 
d - (a *b) - c = -190 // d là một string nhưng khi giúp phép - thì string trong js được hiểu là 1 number
a + b + c + d = 6040 // d là một string khi + với number thì js sẽ được hiểu là + chuỗi lại 
d + a + b + c = 40102030 // trong đoạn này js sẽ hiểu là đang cộng các chuỗi lại với nhau
d + a - b + c = 4020 // d + a thì là + chuỗi nhưng khi - thì trong js chuỗi sẽ thành number và thực thi như là number
a - b + d -c = 1070 // vẫn +- từ trái sang phải nhưng khi + với d thì number + string thì -1040 và phép toán - thì string sẽ thành number sau đó thực thi phép trừ bình thường
d - c + a -b = 0 // d sẽ thành number và thực thi biến như +- bình thường 
a * b + d * c = // d sẽ thành number với phép nhân nên sẽ */ trước và + lại bình thường 

4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?
Giải thích vì sao có kết quả đó
a = 1 , b = "2", c= 3, d="4"
b + d = "24" // string + string thì cộng 2 string lại với nhau
 a + b + c + d = "1234" // a là string khi + với b với c thì vẫn là string + number vẫn là string nên khi gặp d là string thì kết quả vẫn là 1 string
 a - b + c - d = -2 // string khi - thì string sẽ được hiểu là 1 number nên +- bình thường
 a - b - c + d = "-44" // thưkc thi phép toán - từ phải sang trái bình thường nhưng khi + string thì trong js được hiểu là cộng các chuỗi lại với nhau nên ở đây có kết quả là 1 string 
 (b+d) - (a+c) = 20 // string - number trong js sẽ hiểu là number - number nên kết là number
 (a+b) - (c+d) = -22 // cứ khi nào - thì string dạng số thì hiểu là number
 a * c + b  * d = 11 // string khi và chỉ khi  
 -b + d = "-24"
 - b - d = -6
 - (b+d) = -24



