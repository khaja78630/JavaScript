// 2015
// ES6
// classes

const obj = {

    name : 'Sai'
}

class Person {
    constructor(name){
        this.name = name
    }

}

const p1= new Person('Sai');

console.log(p1);

// inheritance

class Address extends Person{
    constructor(name, address){
        super(name);
        this.address = address;
    }
}

const address = new Address('Sai', 'Hyd');


console.log(address);


// class Name extends React.Componect {
// render
//}

//arrow functions


const displayName = function(name){
    console.log(name)
}

displayName('Sai');

const displayName1 = name => {
    console.log(name)
}

displayName1('Sai');

const getName = function (){
    return 'Sai'
}
console.log('normal',getName());


const getName1 = () => {
    console.log('from arrow')
    return 'Sai'

}



console.log('arrow', getName1());

// function test(func){
//}

//test(() => {})

// react - web application - laptop, mobile, desktop

// react native - android ,ios

// Destruting

const object = { name : 'Sai', address: 'HYD'}

console.log(object.name);


const {name, address1} = object; // object destrutring


const arr = [1,2,3];

arr[0]
arr[1]

const [num1,,num3] = arr;

// Spred oprator

//const object1 = object;


const object1 = {...object, address:'USA', age:20};

const arr1 = [1,2,3];

const arr2 = [...arr1, 4, 5];

// const obj = { x: 1, y: 2 };
// const newObj = { ...obj, y: 3, z: 4 }; // x:1, y:3, z:4
// console.log(newObj.y);

// array map

const numarray = [1,2,3];
const updateArray = numarray.map(num => {
    // return <li>num + 10</li>;

})
console.log(updateArray);


// rest operator

function sum(...numArray){ // [10,20,30]

}
sum(10,20,30);


//generators - redux saga

function getvalues(){
    return [10,20,30]
}
console.log(getvalues())


function* getvalues(){

    yield 10;
    yield 20;
    yield 30;
}
const generator = getvalues();
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

// map, set

// key, value

const person2 = new Map([['name', 'Sai'], ['address', 'HYD']]);

person2.set('age', 30)
console.log(person2);

person2.forEach((key, value) => {
console.log(key, value);
})

// const [name, setName] = useState('') ; ['', () => {}]

    // set


    const set = new Set([1,2,3,3,4,5]);
   

    set.add(6);

    console.log(set);


    // weakmap, weakset

    const weakmap = new WeakMap([[{}, 'Sai']]);

    console.log(weakmap);


