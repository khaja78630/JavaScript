// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     // if(xhr.readyState === 4){
//         console.log(this.responseText);
//        console.log(this.responseText);
//       const data = JSON.parse(this.responseText)
//       console.log(data.name)
//     // }
// }
// xhr.open('GET','https://api.github.com/users/khshaik',{user: 'Sai'});
// // console.log(xhr.readyState); //0, 1,2,3,4

// xhr.send();

// //GET
// // POST
// // PUT
// //DELETE


// // mongoclient.connect('monod:120.0.1.1/1234/db')

// promises

// api , file , DB connect

const promise =  new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise resolve');
        resolve();
    }, 0);
})

promise.then(function(){
    console.log('promise fullfiled')
})


const promise1 =  new Promise(function(resolve, reject){
    setTimeout(function(){
        //db connect
        console.log('network failer')
        reject(err);
    }, 0);
})

promise1.then(function(){
    console.log('promise fullfiled')
}).catch(function(errr){
    console.log(err, 'promise rejected')
})


const promise3 =  new Promise(function(resolve, reject){
    setTimeout(function(){
        //get user name api
        console.log('network failer')
        resolve({name : 'Sai'});
    }, 0);
})

promise3.then(function(data){
    console.log('promise fullfiled');
    console.log(data)
}).catch(function(errr){
    console.log('promise rejected')
})

// const promise4 = fetch('https://api.github.com/users/khshaik');

// promise4.then(function(response){
// console.log(response.name);
// return response.json();
// }).then(function(obj){
//     console.log(obj.name);
// }).catch(function(err){
//     console.log(err)

// })

// async , await

async function getUserName(){
    try{
        const response = await fetch('https://api.github.com/users/khshaik');
        const obj = await response.json();
        console.log(obj.name);
    } catch(err){
        console.log('err', err);
    }
    }
    

getUserName();

