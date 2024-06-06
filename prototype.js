console.log('proto type');

//OOOP

// inheritance

const vehical = {
    type:'car',
    drive: function(){
        console.log('drive');
    }
}

const bmw = Object.create(vehical);

const audi = Object.create(vehical);

//Es6 
class Vehical{
    constructor(){

    }
    type = 'Car'
}

class BMW extends Vehical{
    
    name = "BMW"
}

const bmw1 = new BMW();
bmw1.type // 
const p1 ={
    name : 'Sai'
};

const p2= {
    name: 'Krishna'
}

function Person(name){
this.name = name;
}
const p3 = new Person('Sai'); //{name : 'Sai'}
const p4 = new Person('Krishna'); //{name : 'Sai'}

// class Buuton extends Component {
//     render(){
//         return <button></button>
//     }
// }



