let name = "SAI"; // string literal prot

console.log(typeof name);

let objName = new String('Sai');

console.log(typeof objName);

objName.toUpperCase();

if(name.toLowerCase() == 'sai'){
    console.log(name);

} else {
    console.log('name is not matched')
}

// const postData = 'place hyd"
// substring, //postaData.subStrr(0, 5)

const word = "Testte"; // ['a', 'b','c']
const obj = [];
for (let i = 0; i < word.length; i++) { // T, e, s,
  
    if (obj.indexOf(word[i].toLocaleLowerCase()) < 0) {

        obj.push(word[i].toLowerCase());
    }
}
console.log(obj);

word.substring(0,2);

const str= 'Your application $id created successfully'

const id = 123;

console.log(str.replace('$id', id));

// string interpolation

let greeting = "Sai"
const greet= "Good Morning"

greeting = greeting + greet + 'Hi';

greeting = `${greeting} ${greet} Hi `

const userName = ' assdfg       ';

console.log(userName.trim());

//let s = "Sai"

// String - functions


// Numbers


let score = 100; // number literal

const objNum = new Number(100);

//toFixed()
//toPrecision

//Math

const random = Math.random(); //0 - 0.9 - 0 -9 + 1

const result = (random * 100) + 1;

const min = 10;

min.toString() = '10'
// 'your score is 100'

// `your score is ${score}`

const max = 100

const result1 = ((random * (max-min)) + min);

console.log('random', result1.toFixed(0));


//Date object

const date = new Date();

const arrayData = [0, 'a', 2, 'b', 'c']

const capital1 = "HYD";

const capitals = ["HYD", "DELHI", "BANGLORE", "CHENNAI"]
                // 0       1        2           3
// const studentMarks = [100, 67, 56, 89, 67]

const array = [10, "SAI", "HYD",{name : 'SAI', walk: function() {console.log('walking')}}]

const empDetails = [
    {name : 'SAI', walk: function() {console.log('walking')}},
    {name : 'SAI', walk: function() {console.log('walking')}}

]

const empDetailsObj = {
    'e1' : {name : 'SAI', walk: function() {console.log('walking')}},
    "e2": {name : 'SAI', walk: function() {console.log('walking')}}
}

// const response = {
//     stauscode : 200,
//     results : [
//         {
//           "id": 1,
//           "name": "Leanne Graham",
//           "username": "Bret",
//           "email": "Sincere@april.biz",
//           "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//             }
//           },
//           "phone": "1-770-736-8031 x56442",
//           "website": "hildegard.org",
//           "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//           }
//         },
//         {
//           "id": 2,
//           "name": "Ervin Howell",
//           "username": "Antonette",
//           "email": "Shanna@melissa.tv",
//           "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//             }
//           },
//           "phone": "010-692-6593 x09125",
//           "website": "anastasia.net",
//           "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//           }
//         },
//         {
//           "id": 3,
//           "name": "Clementine Bauch",
//           "username": "Samantha",
//           "email": "Nathan@yesenia.net",
//           "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//               "lat": "-68.6102",
//               "lng": "-47.0653"
//             }
//           },
//           "phone": "1-463-123-4447",
//           "website": "ramiro.info",
//           "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//           }
//         },
//         {
//           "id": 4,
//           "name": "Patricia Lebsack",
//           "username": "Karianne",
//           "email": "Julianne.OConner@kory.org",
//           "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//               "lat": "29.4572",
//               "lng": "-164.2990"
//             }
//           },
//           "phone": "493-170-9623 x156",
//           "website": "kale.biz",
//           "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//           }
//         },
//         {
//           "id": 5,
//           "name": "Chelsey Dietrich",
//           "username": "Kamren",
//           "email": "Lucio_Hettinger@annie.ca",
//           "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//               "lat": "-31.8129",
//               "lng": "62.5342"
//             }
//           },
//           "phone": "(254)954-1289",
//           "website": "demarco.info",
//           "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//           }
//         },
//         {
//           "id": 6,
//           "name": "Mrs. Dennis Schulist",
//           "username": "Leopoldo_Corkery",
//           "email": "Karley_Dach@jasper.info",
//           "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//               "lat": "-71.4197",
//               "lng": "71.7478"
//             }
//           },
//           "phone": "1-477-935-8478 x6430",
//           "website": "ola.org",
//           "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//           }
//         },
//         {
//           "id": 7,
//           "name": "Kurtis Weissnat",
//           "username": "Elwyn.Skiles",
//           "email": "Telly.Hoeger@billy.biz",
//           "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//               "lat": "24.8918",
//               "lng": "21.8984"
//             }
//           },
//           "phone": "210.067.6132",
//           "website": "elvis.io",
//           "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//           }
//         },
//         {
//           "id": 8,
//           "name": "Nicholas Runolfsdottir V",
//           "username": "Maxime_Nienow",
//           "email": "Sherwood@rosamond.me",
//           "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//               "lat": "-14.3990",
//               "lng": "-120.7677"
//             }
//           },
//           "phone": "586.493.6943 x140",
//           "website": "jacynthe.com",
//           "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//           }
//         },
//         {
//           "id": 9,
//           "name": "Glenna Reichert",
//           "username": "Delphine",
//           "email": "Chaim_McDermott@dana.io",
//           "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//               "lat": "24.6463",
//               "lng": "-168.8889"
//             }
//           },
//           "phone": "(775)976-6794 x41206",
//           "website": "conrad.com",
//           "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//           }
//         },
//         {
//           "id": 10,
//           "name": "Clementina DuBuque",
//           "username": "Moriah.Stanton",
//           "email": "Rey.Padberg@karina.biz",
//           "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//               "lat": "-38.2386",
//               "lng": "57.2232"
//             }
//           },
//           "phone": "024-648-3804",
//           "website": "ambrose.net",
//           "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//           }
//         }
//       ]

// }

const studentMarks = [100, 67, 56, 89, 67];

studentMarks.push(100);

console.log('marks', studentMarks); // [100, 67, 56, 89, 67, 100];

studentMarks.pop();

console.log('marks', studentMarks); // [100, 67, 56, 89, 67];

console.log('element at postion 4', studentMarks[3]) // 89

console.log('postion of 67', studentMarks.indexOf(67));  //4

studentMarks.unshift(200); //[200, 100, 67, 56, 89, 67];

studentMarks.shift(200); //[100, 67, 56, 89, 67];

// const name = "test";
// name.slice(0,2); //te

// const studentMarks = [100, 67, 56, 89, 67];

const studentMarks2 = studentMarks;


const slicepart = studentMarks.slice(0,2) // [100, 67]

const slicepart2 = studentMarks.slice() // [100, 67, 56, 89, 67];


const slicepart3 = studentMarks.splice(0,0, 2); // addition

const slicepart4= studentMarks.splice(2,1) ; // remove element at particular postion

// filter, map, reduce

const marks = [100, 67, 56, 89, 67]; // marks > 70

const results = [];

for(let i=0;i<marks.length;i++){
    if(marks[i] > 70){
        results.push(marks[i])
    }
}
// [100,89]

const marks1 = [100, 67, 56, 89, 67]; // marks > 70

const filteredMarks = marks.filter(function(e){  // [100,89]

    return e > 70;
});

const names = ['Sai', 'Krishna', "Khaja"]



const word1 = "madam"

var result4 = "";

for(let i=word1.length -1;i>0;i--){
    result4 = result4 + word1[i];
}
console.log(result4);

const names1 = ["Sai", "Khaja"]; // Data from DB

const names2 = names1.slice(); // copy array using slice


const input = 'Sai';

const filteredArray = names1.filter(name => {
    return name.includes(input);
}) // ["Sai"];


// spred operator

const names3 = ["Sai", "Khaja"]; 


// copy
const names4 = [...names3];

// mergde two arrays

const names5 = ["Sai", "Khaja"]; 
const names6 = ["Krishna"];

const names7 = [...names5, ...name6] // ["Sai", "Khaja", "Krishna" ];




































