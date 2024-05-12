console.log(this);


const user1 = {
    name: 'Sai',
    getName : function(age) {
        alert(this.name)
        alert(age)
    }
    
}

// const user1 = {
//     name: 'Sai',
//     getName : () => (age) {
    // const context = this;
//         alert(this.name)
//         alert(age)
//     }
    
// }

const user2 = {
    name: 'Krishna',
    getName :  function(age) {
        alert(this.name)
        alert(age)
    }
}

// user1.getName(); // Sai

// user2.getName(); // Krisna

const gn = function(age, age1) {
    alert(this.name);
    alert(age);
    alert(age1)
}

// bind, apply, call

// gn(); // undefined

// apply


gn.apply(user1, [30, 20]); // Sai

gn.call(user2, 30, 10); // Krishna

const func = gn.bind(user1, 30, 10);
func();








const user1 = {
    name: 'Sai',
   getName : () => {
       const context = this;
    alert(context.name)
   alert(age)
   }
       
   }