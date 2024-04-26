function sumNumbers1to10000(){
    let sum = 0;
    for(let i=1;i<10000;i++){
        sum = sum + i
    }
    return function(){
        console.log('test')
    }
}
const fn = sumNumbers1to10000();
console.log(fn());

// closure 

// currying

// sum(2)(3)
// currying

function sum(a){
    return function(b){
        return function(c){
            return a+ b + c;
        }
    }
}
console.log(sum(2)(3)(4));

const f1 = sum(2);

// function(b){
//     return function(c){
//         return a+ b + c;
//     }
// }

const f2 = f1(3);

// function(c){
//     return a+ b + c;
// }

console.log(f2(4));

// setTimeout(function(){
//     console.log('Hi')
// }, 2000);

// setInterval(function(){
// console.log('interval');
// }, 1000)

// for(let i=1;i<=5;i++){ // 6, 6,6,6,6
//     console.log(i);
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }


for(let i=1;i<=10;i++){ // 1, 2, 3, 4,5
    console.log(i);
}

let i=1;
while(i<=10){
console.log(i);
i++
}

const city = "Guntur"

if(city == "Guntur"){
    console.log('State : AP')
} else if(city == "HYD"){
    console.log('State : TS')
} else {

}

// switch city{
//     case 'Guntur'
//     console.log('AP')
//     break;
//     case 'Guntur'
//     console.log('AP')
//     break;
//     default:

// }

let value =1;
do {
    console.log(value)
value++;
} while(value <=10)


for(i=1;i<=10;i++){
    console.log(i);
    //if(i == 5) break;
    //if(i == 5) continue;
}
<Button />







