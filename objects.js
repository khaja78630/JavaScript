// user - name, email id, mobile no
const userName = "Sai";
const userEmailId = "test@google.com"
const userMobileNo = "12345";
const roles = []

console.log(userName, userEmailId, userMobileNo);

const user = {
    "userName" : "Sai",
    userEmailId: "test@google.com",
    "user MobileNo": "12345",
    getUserDeatils : () => {
        console.log('fn',userName, userEmailId, userMobileNo);
    }
}

console.log('fn call', user.getUserDeatils());

console.log(user.userName, user['userName']);

console.log('userMobileNo',user['userMobileNo'])

// freeze object
Object.freeze(user);

user.getUserDeatils();

console.log('[]',user['user MobileNo']);

const key = "userEmailId";

console.log('[]',user[key]);


function getValues(userObj, key) {
    const value = userObj[key]

    return value;

}

console.log(getValues(user, 'getUserDeatils'))


const countries = {
    'IN' : "Delhi",
    'USA': "New york"
    //"UK" : "London"
}
console.log("before freeze", countries);
Object.freeze(countries);
countries.UK = "London";

console.log("after freeze", countries);



const famousAreas = {
    "Delhi" : 'test',
    "New york": "test1"
}

// Capital : famous area

console.log('keys', Object.keys(countries));

const countryArray = Object.keys(countries); // ['IN", 'USA"]

console.log('values', Object.values(countries))

// for(let i=0; i<countryArray.length;i++){
//     console.log(countries[countryArray[i]]); // "Delhi" // countries['IN']

//     console.log(famousAreas[countries[countryArray[i]]]) // famousAreas["Delhi"]
// }

//for in


for(let key in countries){ //IN
    console.log(countries[key]); // "Delhi" // countries['IN']

    console.log(famousAreas[countries[key]]) // famousAreas["Delhi"]
}
// for of

for(let value of Object.values(countries)){
    console.log(value);

}


// spread operator

const Obj1 = {1 : 'a', 2 : 'b'};

const obj2 = {...Obj1}

const obj3 = {2: 'c', 4 : 'd'};

const obj5 = {...Obj1, ...obj3};

const obj6 = {...Obj1, ...obj3};
console.log('using spred', obj6)
// merge or copy using assign

const obj7 = Object.assign({}, Obj1, obj3 );
console.log('using assign', obj7);

const Obj10 = {

    5: "e",
    6: 'f'
}

const obj11 = {...Obj10, 6:"g"}

const userObj = {
    userId : '', // textfiled
    password: '' // text
    ///----
}


// const userId = userObj.userId;
// const password= userObj.password;

const {userId, password} = userObj;
//

// const id = userObj.userId;

// destruting 
//const {userId} = userObj;


function print({userId}){
console.log(userId)
}

console.log('print', print(userObj))















