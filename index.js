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
// switch(new Date().getDay()) {
//     case 0:
//         console.log('Chủ nhật');
//         break;
//     case 1:
//         console.log('Thứ hai');
//         break;
//     case 2:
//         console.log('Thứ ba');
//         break;
//     case 3: 
//         console.log('Thứ tư');
//         break;
//     case 4:
//         console.log('Thứ năm');
//         break;
//     case 5:
//         console.log('Thứ sáu');
//         break;
//     case 6:
//         console.log('Thứ bảy');
//         break;
//     default: 
//         console.log('Không xác định');
//         break;
// }

// class Animal {
//   constructor(name, species) {
//     this.name = name
//     this.species = species
//   }

//   introduce() {
//     console.log(`I am a ${this.species} named ${this.name}`)
//   }
// }
// //Tạo ra đối tượng từ lớp Animal
// const cat = new Animal('Jerry', 'cat')

// //Gọi phương thức introduce để hiển thị thông tin về đối tương
// console.log(cat.introduce())

// //Getter, Setter
// class Person {
//   // constructor(firstName, lastName) {
//   //   this.firstName = firstName
//   //   this.lastName = lastName
//   // }
//   constructor(name) {
//     this._name = name;
//   }

//   // get fullName() {
//   //   return `My name is ${this.lastName} ${this.firstName}`
//   // }

//   //Setter đặt tên
//   set name(value) {
//     this._name = value
//   }
//   //Getter để lấy tên
//   get name() {
//     return this._name
//   }

// }

// // const man = new Person("Minh Hung", "Nguyen")
// //Tạo 1 đối tượng từ lớp Person
// const man = new Person("Alice")
// //Sử dụng setter để đặt tên mới
// man.name = "Bob"
// console.log(`My name is: ${man.name}`)
// // console.log(man.fullName)

// //Kế thừa - Inheritance
// class Parent {
//     constructor(name) {
//       this.name = name
//     }
//     sayHello() {
//       console.log(`Xin chao, toi la ${this.name}.`)
//     }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name) //Gọi constructor của lớp cha và truyền tham số 'name'
//     this.age = age
//   }
// }
// const child = new Child('Kha', 5)
// child.sayHello()


//DOM
// const p1 = document.getElementById('p1')
// const p1 = document.getElementsByClassName("p1")
// console.log(p1)

// const p = document.querySelector('#header')
// p.innerHTML = "<span>abc</span>"
// console.log("p: ", p)

// const btn = document.getElementById('btn')
// btn.textContent = "Confirm"

// const tagNameP = document.getElementsByTagName('p')

// const parent = document.getElementById("parent");

// document.createElement("h1")


// const child = document.getElementById("child");
// const child1 = document.getElementById("child1");
// const throwawayNode = child.removeChild(child1);
// // const throwawayNode = parent.removeChild(child);
// console.log("throwawayNode: ", throwawayNode)


function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Xin Chao");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  div1.style.color = "red"
  document.body.insertBefore(newDiv, currentDiv);
}
addElement()
