const num1  = 100;
const num2  = 200;

const sum = num1 + num2

console.log('sum', sum)

const num3 = 300;
const num4 = 400;

const sum2 = num3 + num4

console.log('sum2', sum2);

function total2(num1, num2) { // num1 = 10, num2 =20
    if (num1 == undefined || num2 == undefined) {
        console.log("parameters are missing")
        return ;
    }
    console.log(num1, num2)
    const sum = num1 + num2;
    console.log("from function sum ", sum);
    return sum;



}

const result = total2(10, 20,);

// functiom parametsr  any type
console.log('result', result)
// if(result == 30){
//     console.log('sum oeratiion working fine')
// } else {
//     console.log('sum not performed')
// }

// rest opearator
function total3(...numbers){ // [10, 20, 30]
    console.log('numbers', numbers);
    let sum = 0;
    for(let value of numbers){
        sum = sum + value;
    }
    console.log('sum', sum)
}

total3(10,20)

function total4(numbers){ // [10, 20, 30]
    console.log('numbers', numbers);
    let sum = 0;
    for(let value of numbers){
        sum = sum + value;
    }
    console.log('sum', sum)
}

const array =[30, 40];

total4([30,40]); //total4(array);



// product

//product id, product name, price


const p1 = {
    id :1,
    name : 'mobile',
    price : 5000,
    quantity: 2

};

const p2 = {
    id :1,
    name : 'mobile',
    price : 500,
    quantity: 1

};

const p3 = {
    id: 3,
    name : 'cover',
    price : 400,
    quantity: 1
    
    };


    // const name = "Sai" // string, boolen

    // [ {
    //     id :1,
    //     name : 'mobile',
    //     price : 5000
    
    // }, p2, p3]

function cartPriceWithRestOpeartor(...products){
    let sum = 0;
     //[]
for(let product of products){ // sum = 
    console.log(product);
    sum = sum + (product.price * product.quantity); // 10000 // 10000 + 500 -> 10500 + 400 = 10900

}
console.log(sum);
}

cartPriceWithRestOpeartor(p1, p2, p3);


function cartPriceWithoutRestOpeartor(products){
    let sum = 0;
     //[]
for(let product of products){ // sum = 
    console.log(product);
    sum = sum + (product.price * product.quantity); // 10000 // 10000 + 500 -> 10500 + 400 = 10900

}
console.log(sum)
}



// const products = [];

// product.push({
//     id: 1,
//     name: 'mobile',
//     price: 5000,
//     quantity: 2
// })

// product.push({
//     id: 2,
//     name: 'charger',
//     price: 1000,
//     quantity: 1
// })

// product.push({
//     id: 3,
//     name : 'cover',
//     price : 400,
//     quantity: 1
// });




const products = [{
    id :1,
    name : 'mobile',
    price : 5000,
    quantity: 2

},
{
    id :2,
    name : 'charger',
    price : 500,
    quantity: 1

},
{
    id :3,
    name : 'cover',
    price : 400,
    quantity: 1

}]


cartPriceWithoutRestOpeartor(products);


function a(b){
    console.log('a function');
    //...
    b();

}

function b() {
    console.log('B function')
}

a(b)






