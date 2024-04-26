const countries = [{'IN' : 'INDIA'},{'DE' : 'DETUCH'}];

//countries[0]

// countries[1]
function getCountryByCode(code){ // var isUserPresentINSupplierSystem = false;
for(let i=0;i<countries.length;i++){ // 0< 2
   const obj =  countries[i];
   for(let key  in obj){ // for of, for in
    if(key == code){
        return obj[key]
    }
   }
}
}
getCountryByCode('IN')



