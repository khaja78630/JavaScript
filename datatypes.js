//Primitive data types
// number, string, boolean, null, undefined

let age = 30;

let name = "Sai";


let isLoggedIn = true;

let result;

result = 2 +3;


let value = null;


let id =123;

let id1 = 123;


// = - assignment

// == comparisioan 
console.log('isIDEqual', id == id1)

let s1= Symbol('123');

let s2 = Symbol('123');


console.log('symbol equal ', s1 == s2)

//Javascript version

//ES5, 6


// data types

let data = "Krishna";

console.log(typeof data);
console.log(typeof age);

let fname = "Sai";
let lanme = "Krishna";

let fullname = fname + lanme;
console.log(fullname);

let num1 = 'abc' // 

let num2 = 'cde'

let sum = num1 + num2;

console.log('sum', sum);




if(typeof num1 == 'number' && typeof num2 == 'number'){ //'100' , 'abc'
    sum = num1 + num2;
} else {
    const convertedNum1 = Number(num1); // 1 // NaN
    const convertedNum2 = Number(num2); // 2 // NaN
    sum = convertedNum1 + convertedNum2;
    console.log(sum);
}

console.log(Number(true));
console.log(Number(false));

let num3 = "100";

console.log(num3);

console.log(+num3);

console.log(Number(undefined));
console.log(Number(null));

//

let number1 = 1000;

console.log(number1);

console.log(String(number1));

console.log(String(true));

// 1 - true

// 0 - false


// 100 -  true

console.log(Boolean(1)); // true
console.log(Boolean(0)); // flase
console.log(Boolean(100)); // true

console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false

console.log(Boolean("Sai")); // true

let  fullName; // ""

// == , > < >= <= != 

// print name if it not empty
// if(fullName != '' && fullName != undefined){
//     console.log('name', fullName );
// } else {
//     console.log('name is empty');
// }

let age1 = 0;
if(age1){
    console.log('age is > 0')
} else {
    console.log('age is 0')
}

if(fullName){
    console.log('name', fullName );
} else {
    console.log("name is  empty")
}


// == ===

let v1 = 100;
let v2 = "100";

console.log('equal', v1 == v2); // compare only values  -> true
console.log('equal', v1 === v2); // compares both values and types -> false


console.log([] == ""); // true

// console.log([] === ""); // false

// == , !=, > , < 


// Strings, Date, 
// Array, Objects, Functions - non primitive or referecne

const userObj = {id : 10};

const userObj2 = userObj;

console.log(userObj);

console.log(userObj2);

userObj2.id = 20;
 
console.log(userObj);

console.log(userObj2);
























// comparision operators


// conversions


function test(){
    alert('data entered')
}

function getTotal(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const sum = num1 + num2;
   document.getElementById('result').innerText = sum;
}











