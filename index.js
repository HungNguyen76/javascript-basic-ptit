// có 3 cách import file js vào htm
// 1. inline
// 2. internal
// 3. external



const a = 5
console.log(a)

// cú pháp khai báo biến: var , let, const
// var: có thể khai báo lại, có thể gán lại giá trị (variable)
// let: không thể khai báo lại, có thể gán lại giá trị 
// const: không thể khai báo lại, không thể gán lại giá trị (constant)

//khai báo 1 biến b và gán trị bằng 15
let b = 15;
let c;
var username = 'Nguyen Minh Hung'
const count = 10;
const pi = 3.14;

//gán lại giá trị cho b bằng 20
c = 30;
b = 20;
// count = 11;
// const pi = 4;
//in ra console biến b
console.log(b);
console.log(c);
console.log(username);
console.log(count);
console.log(pi);


//Scope của var, const, let
// var: có scope là function scope (hoặc global scope)
//let, const: có scope là block scope(hoặc local scope) {}

function submit() {
    var x = 10;

    if(true) {
        let y = 20;
        console.log(x)
    }
    // console.log(y);
}
submit();

//Quy tắc đặt tên biến
const fullName = 'Nguyen Minh Hung'; //camelCase
// prompt(fullName)
// confirm(fullName)

// const age = Number(prompt('Nhập tuổi của bạn: '));
// const isGamer = confirm('Bạn có phải là một game thủ?');

// if( age > 15){
//     alert('Bạn đã đủ tuổi vào lớp 10');
// } else {
//     alert('Bạn chưa đủ tuổi vào lớp 10');
// }

// if(isGamer) {
//     alert('Chúng ta cùng chơi game nhé!');
// } else {
//     console.log('Tôi sẽ hướng dẫn bạn chơi game');
// }

//Kiểu dữ liệu trong JS
//Primitive type: number, string, boolean, undefined, null, symbol
//Non-primitive type: object, array, function

//Primitive type
const num = 10;
const str = 'Hello';
const isStudent = true;
const x = undefined;
const y = null;
const z = Symbol('symbol');


//Non-primitive
const obj = {
    //key: value
    name: 'Hung',
    age: 20
};
let number = 10.5;
const arr = [1, 2, 3, 4, 'hung', true, null, undefined, {name: 'hung'}];
console.log(typeof number)


// const count = animals.push('cows')
animals.push('chickens', 'cats', 'dogs');
// console.log(count); 
console.log(animals)


// Hàm kiểm tra xem ba số có tạo thành một tam giác không
function isTriangle(a, b, c) {
  return a + b > c;
}

// Hàm đếm số lượng tam giác có thể tạo từ mảng
function countTriangles(arr) {
  let count = 0;
  let triangles = [];
  // Sắp xếp mảng
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
      let k = i + 2;
      for (let j = i + 1; j < arr.length; j++) {
          while (k < arr.length && isTriangle(arr[i], arr[j], arr[k])) {
              triangles.push([arr[i], arr[j], arr[k]]);
              k++;
          }
          if (k > j) {
              count += k - j - 1;
          }
      }
  }

  return {count, triangles};
}

// function main() {
//   let arr = prompt("Nhập vào một mảng số nguyên dương, cách nhau bởi dấu phẩy: ").split(",").map(Number);
//   let result = countTriangles(arr);

//   console.log("Số lượng tam giác có thể tạo: ", result.count);
//   console.log("Các tam giác có thể tạo: ", result.triangles);
// }

// main();

//object literals
const obj1 = {
  //property
  name: "Nguyen Minh Hung",
  age: 18,
  //method
  sayHi: function() {
    return `Hello, my name is ${this.name}`
  }
}
console.log(obj1.sayHi())
console.log(obj1['age'])

obj1.name = "Alice"
obj1.gender = "Male"
// delete obj.name
const keys = Object.keys(obj1)
console.log(keys)

const target = {}
const source1 = { a: 1}
const source2 = { b: 2}
const source3 = { c: 3}
Object.assign(source1, source2, source3)

console.log(source1)

const animal = {
  type:"Chicken",
  sound: "Help me!!!!",
  get makeSound() {
    return this.type + " barks " + this.sound + "on fireee"
  }
}
console.log(animal.makeSound)//Chicken barks Help me!!!!on fireee

const dog = Object.create(animal)
dog.type = "Dog"
dog.sound = "Gâu gâu"
// dog.makeSound()
console.log(dog)


const person = {
  firstName: "Hung",
  lastName: "Nguyen",
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}
person.fullName = "Duc Duy"//["Duc", "Duy]
console.log(person.firstName)
console.log(person.lastName)

const car = {
  make: "BMW",
  model: "I8",
  year: 2024,
  color: "White"
}
// console.log(car['make'])
for (let key in car) {
  console.log(key + ": " + car[key])
}

//tạo object với đối tượng Object
// const student = new Object()
// student.name = "Rikkei Academy"
// student.age = 1
// student.sayHi = function() {
//   return `Hello, my name is ${this.name}`
// }
// console.log(student)


// //tạo object với Object Constructor functions
// function Person(lastName, firstName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.study = function() {
//     return `${this.firstName} is studying`
//   }
// }
// const teacher = new Person("Nguyen", "Minh Hung")
// console.log(teacher)

// //tạo object từ class
// class Student{
//   constructor(name, age){
//     this.name = name
//     this.age = age
//   }
//   sayHi() {
//     return `Xin chào học viên` + this.name
//   }
// }

// const student1 = new Student("TA", 20)
// console.log(student1)
