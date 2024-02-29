// // có 3 cách import file js vào htm
// // 1. inline
// // 2. internal
// // 3. external



// const a = 5
// console.log(a)

// // cú pháp khai báo biến: var , let, const
// // var: có thể khai báo lại, có thể gán lại giá trị (variable)
// // let: không thể khai báo lại, có thể gán lại giá trị 
// // const: không thể khai báo lại, không thể gán lại giá trị (constant)

// //khai báo 1 biến b và gán trị bằng 15
// let b = 15;
// let c;

// var username = 'Nguyen Minh Hung'
// const count = 10;
// const pi = 3.14;

// //gán lại giá trị cho b bằng 20
// c = 30;
// b = 20;
// // count = 11;
// // const pi = 4;
// //in ra console biến b
// console.log(b);
// console.log(c);
// console.log(username);
// console.log(count);
// console.log(pi);


// //Scope của var, const, let
// // var: có scope là function scope (hoặc global scope)
// //let, const: có scope là block scope(hoặc local scope) {}

// function submit() {
//     var x = 10;

//     if(true) {
//         let y = 20;
//         console.log(x)
//     }
//     // console.log(y);
// }
// submit();

// //Quy tắc đặt tên biến
// const fullName = 'Nguyen Minh Hung'; //camelCase
// // prompt(fullName)
// // confirm(fullName)

// // const age = Number(prompt('Nhập tuổi của bạn: '));
// // const isGamer = confirm('Bạn có phải là một game thủ?');

// // if( age > 15){
// //     alert('Bạn đã đủ tuổi vào lớp 10');
// // } else {
// //     alert('Bạn chưa đủ tuổi vào lớp 10');
// // }

// // if(isGamer) {
// //     alert('Chúng ta cùng chơi game nhé!');
// // } else {
// //     console.log('Tôi sẽ hướng dẫn bạn chơi game');
// // }

// //Kiểu dữ liệu trong JS
// //Primitive type: number, string, boolean, undefined, null, symbol
// //Non-primitive type: object, array, function

// //Primitive type
// const num = 10;
// const str = 'Hello';
// const isStudent = true;
// const x = undefined;
// const y = null;
// const z = Symbol('symbol');


// //Non-primitive
// const obj = {
//     //key: value
//     name: 'Hung',
//     age: 20
// };
// let number = 10.5;
// const arr = [1, 2, 3, 4, 'hung', true, null, undefined, {name: 'hung'}];
// console.log(typeof number)



// let num1 = 10;  
// let num2 = 7; 
// let num3 = 5; 

// //1. Toán tử so sánh: >, <, >=, <=, ==, ===, !=, !==
// // == so sánh giá trị
// console.log(num1 == num2); //true
// // === so sánh giá trị và kiểu dữ liệu
// console.log(num1 === num2); //false
// console.log(num1 != num2); //false
// console.log(num1 < num2 && num2 > num3); //false
// console.log(num1 < num2 || num2 > num3); //true
// console.log(!(num1 < num2));
// console.log(num1 > num2 ? num2 : num1);



// //Toán tử trong JS
// //2. Toán tử số học: +, -, *, /, %, ++, --
// // console.log(num1 + num2); //13
// // console.log(num1 - num2); //7
// // console.log(num1 * num2); //30
// // console.log(num1 / num2); //3.3333333333333335
// // console.log(num1 % num3); //3.3333333333333335
// // console.log(num1++); //10
// // console.log(--num1); //11
// // num1 += 5;
// // console.log(num1); //11


// // const num4 = Number(prompt("Nhập một số bất kì: "));
// //toán tử 3 ngôi
// // console.log(num4 % 2 == 0 ? 'Số chẵn' : 'Số lẻ');

// // if(num4 % 2 == 0) {
// //     console.log('Số chẵn');
// // } else {
// //     console.log('Số lẻ');
// // }

// // Cho phép người dùng nhập vào số điểm lấy từ prompt bàn phím
// //Giỏi: Điểm >= 8 
// //Khá: 8 > điểm >= 7
// //Trung bình: 7 > điểm >= 5
// //Yếu: điểm < 5

// // const mark = Number(prompt('Nhập điểm của bạn: '));
// // if(mark >= 8) {
// //     alert('Giỏi');
// // } else if(mark >= 7) {
// //     alert('Khá');
// // } else if(mark >= 5) {
// //     alert('Trung bình');    
// // } else {
// //     alert('Yếu');
// // }
// console.log(new Date().getDay())
// // if (new Date().getDay() == 0) {
// //     console.log('Chủ nhật');
// // }
// // switch(new Date().getDay()) {
// //     case 0:
// //         console.log('Chủ nhật');
// //         break;
// //     case 1:
// //         console.log('Thứ hai');
// //         break;
// //     case 2:
// //         console.log('Thứ ba');
// //         break;
// //     case 3: 
// //         console.log('Thứ tư');
// //         break;
// //     case 4:
// //         console.log('Thứ năm');
// //         break;
// //     case 5:
// //         console.log('Thứ sáu');
// //         break;
// //     case 6:
// //         console.log('Thứ bảy');
// //         break;
// //     default: 
// //         console.log('Không xác định');
// //         break;
// // }

// // var time = new Date().getHours();
// // console.log (new Date().getHours());

// // switch (true) {
// //         case (time < 10):
// //                 alert('Good morning');
// //                 break;
// //         case (time < 20):
// //                 alert('Good day');
// //                 break;
// //         case (time > 20):
// //                 alert('Giờ không hợp lệ');
// //                 break;
// //         default:
// //                 alert('Giờ không hợp lệ');
// // }


// //Vòng lặp trong JS
// //1. for

// // for (var i = 0; i <= 100; i++) {
// //     if (i % 2 == 0) {
// //         console.log(i);
// //     }
// // }   

// // var i = 5;
// // for (var i = 0; i < 10; i+=2) {
// //   // some statements
// //   console.log("i trong vòng lặp: " + i);
// // }
// // document.getElementById("demo").innerHTML = i;

// // var i = 0;
// // while(i < 10) {
// //     console.log(i);
// //     i++;
// // }
// // let positiveNum = Number(prompt('Nhập vào 1 số dương để tính tổng: '));

// // let sum = 0;
// // while(positiveNum > 0) {
// //     sum += positiveNum
// //     positiveNum = Number(prompt('Nhập vào 1 số dương để tính tổng, kết thúc bằng cách nhập số <=0 : '));
// // }
// // console.log("Tổng số dương lớn hơn 0: ", sum)

// //Array
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// console.log("độ dài mảng fruits: ", fruits.length);
// // fruits = [1,2,3,4,5,6];
// // console.log("mảng fruits: ", fruits);

// fruits[1] = 'Water melon';
// console.log('phan tu thu 2 cua fruits: ', fruits[1])

// //Primitive (tham tri: number, string, boolean, null, undefined, symbol) and Non-primitive (tham chieu: object, array, function)
// const a1 = 10;
// const a2 = 10;
// console.log(a1 == a2);

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// console.log(arr1 == arr2);

// const data = [1,2,3]
// const numbers = data;
// numbers[0] = 10;
// console.log("mang numbers: ", numbers);
// console.log("mang data sau khi thay doi", data)

// // const arr3 = [1,4,9,16]
// // const arr4 = arr3.map(function (x) {
// //     return x * 2
// // });
// //arrow function
// // const arr4 = arr3.map(x => x * 2);

// // for (let i = 0; i < arr3.length; i++) {
// //     arr3[i] = arr3[i] * 2
// // }
// // console.log("arr4: ", arr4)

// //CRUD
// //dùng push: thêm phần tử vào cuối mảng, trả về chiều dài mảng
// const data1 = [1,2,3]
// data1.push(4)
// console.log("mang data1: ", data1);

// //unshift(): thêm phần tử đầu mảng
// const data2 = [1,2,3]
// data2.unshift(0)
// console.log("mang data2: ", data2);

// //splice(): thêm phần tử vào vị trí bất kì của mảng
// // const data3 = [1,2,3]
// // data3.splice(0,0,4)
// // console.log("mang data3: ", data3);

// // const months = ['Jan', 'March', 'April', {name: 'Hung'}];
// // months.splice(1,0,'Feb');
// //splice(): trả về mảng đã mới đã chỉnh sửa

// //pop(): trả về phần tử cuối cùng của mảng
// // console.log(months.pop());

// const fruits1 = ['apple', 'banana', 'coconut'];
// // fruits1.pop();

// console.log(fruits1.pop());

// for(let i = 0; i < 10; i++) {
//     if(i === 7) {
//         continue;
//     }
//     console.log(i);
// }
// console.log("Thực hiện xong việc lặp")

// const inputStr = prompt("Nhập vào chuỗi bất kỳ: ");

// const allSubstrings = [];

// for (let i = 0; i < inputStr.length; i++) {
//   let substring = "";
//   for (let j = i; j < inputStr.length; j++) {
//     substring += inputStr[j];
//     allSubstrings.push(substring);
//   }
// }

// console.log("Danh sách tất cả các chuỗi con:", allSubstrings);

//function
//keyword functionName (params) {}

//Hoisting: là cơ chế mà JS sẽ đưa phần khai báo lên trên cùng của scope
//Declaration function
//param1, param2 là tham số
function submitForm(number1, number2) {
  let sum = 0;
  for(let i = number1; i <= number2; i++) {
    sum += i;
  }
  return sum  
}

//Template string  (ES6)
function isEven(num) {
  if(num % 2 === 0) {
    console.log(`${num} là Sô chẵn`)
  } else {
    console.log(`${num} là Số lẻ`)
  }
}
// const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.map(x => isEven(x)
function main() {
  // console.log("Sum from 1 to 10 is ", submitForm(1,10));
  // console.log("Sum from 20 to 37 is ", submitForm(20, 37))
  // console.log("Sum from 35 to 49 is ", submitForm(35, 49))
  isEven(5)
}
// main()


//Tham tri: string, number, boolean, null, undefined, symbol
function passByValue(x) {
  x = x + 1
  console.log(x)
}
let y = 5
passByValue(y)
console.log(y)

function changeName(person) {
  person.name = 'Alice'
  person.age = 20
}
let personName = { name: 'Bob', age: 15}
changeName(personName)
console.log(personName)
//Gọi hàm, 1 và 2 là đối số
// console.log("submitForm: ", submitForm(10));


//Expression function
// const submitForm1 =  function submitForm(param1, param2) {
//   console.log("Form da duoc submit voi gia tri cua expression function: ", param1, param2)
// }
// submitForm1(3,4)
