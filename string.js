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














