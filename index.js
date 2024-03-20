let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
};

let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 1995",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
            techName: "Android",
            exp: 2,
        },
        {
            id: 2,
            imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
            techName: "Angular",
            exp: 1,
        },
        {
            id: 3,
            imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
            techName: "Bootstrap",
            exp: 3,
        },
        {
            id: 4,
            imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
            techName: "Vue",
            exp: 2,
        },
        {
            id: 5,
            imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
            techName: "React",
            exp: 2 / 3,
        },
        {
            id: 6,
            imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
            techName: "Mongodb",
            exp: 0.25,
        },
        {
            id: 7,
            imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
            techName: "Laravel",
            exp: 1,
        },
        {
            id: 8,
            imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
            techName: "Node.js",
            exp: 5 / 6,
        },
    ],
};

let projects = [
    {
        id: 1,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        projectName: "Auto Drive Project",
        link: "https://abcd-example.com",
        tags: ["Angular", "React", "Jquery"],
    },
    {
        id: 2,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        projectName: "Ecommerce Project",
        link: "https://abcd-example.com",
        tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
        id: 3,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        projectName: "Chat Application",
        link: "https://abcd-example.com",
        tags: ["MongoDB", "Javascript"],
    },
    {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        projectName: "Social Media Platform",
        link: "https://abcd-example.com",
        tags: ["Vue", "Javascript"],
    },
    {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        projectName: "Image Sharing Platform",
        link: "https://abcd-example.com",
        tags: ["React", "Javascript"],
    },
];

let project = localStorage.setItem("storage", JSON.stringify(projects));


document.addEventListener("DOMContentLoaded", function () {
    var projectTable = document.getElementById("projectTable");
    let projects = localStorage.getItem("storage") ? JSON.parse(localStorage.getItem("storage")) : [];

    function displayProjects() {
        projectTable.innerHTML = `
            <th>Project Name</th>
            <th>Image URL</th>
            <th>Link</th>
            <th>Tags</th>
            <th>Action</th>
        `

        projects.forEach(p => {
            let row = projectTable.insertRow(-1);
            row.insertCell(0).innerHTML = p.projectName;
            row.insertCell(1).innerHTML = p.imgUrl;
            row.insertCell(2).innerHTML = p.link;
            row.insertCell(3).innerHTML = p.tags.join(", ");
            let actionCell = row.insertCell(4);

            let deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            deleteButton.addEventListener("click", function () {
                deleteProject(p.id)
            })

            let updateButton = document.createElement("button")
            updateButton.innerText = "Update"
            updateButton.addEventListener("click", function () {
                updateProject(p.id)
            })
            actionCell.appendChild(deleteButton);
            actionCell.appendChild(updateButton);
        })
    }

    function deleteProject(id) {
        projects = projects.filter(p => p.id !== id)
        localStorage.setItem("storage", JSON.stringify(projects))
        displayProjects()
    }

    function updateProject(id) {
        let projectToUpdate = projects.find(p => p.id === id)
        if(projectToUpdate){
            projectToUpdate.projectName = prompt("Enter new project name")
            projectToUpdate.imgUrl = prompt("Enter new image Url")
            projectToUpdate.link = prompt("Enter new link")
            projectToUpdate.tags = prompt("Enter new tags").split(",")
            localStorage.setItem("storage", JSON.stringify(projects))
            displayProjects()
        } else {
            console.error("Project not found with ID: ", id)
        }
    }

    document.getElementById("newProject").addEventListener("click", function (e) {
        e.preventDefault();
        let projectName = document.getElementById("project_name").value;
        let imgUrl = document.getElementById("img_url").value;
        let link = document.getElementById("link").value;
        let tags = document.getElementById("tag").value.split(",")

        var newProject = {
            id: projects.length + 1,
            projectName: projectName,
            imgUrl: imgUrl,
            link: link,
            tags: tags
        }
        projects.push(newProject)

        localStorage.setItem("storage", JSON.stringify(projects))
        displayProjects()
    })
    displayProjects()
})





















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