// button - onclick
//textbox - onchange
// radio - onclick
//checkbox - onchage

// const p = document.createElement('p');
// p.innerText = 'Hello'
// document.body.appendChild(p);

// const button = document.createElement('button');
// button.innerText = 'Click'
// function showMessage(){
//     alert('From javascript');
// }
// // button.onclick= showMessage;
// button.addEventListener('click', showMessage);

// const div = document.createElement('div');
// div.innerHTML = "<p style=\'margin: 0px 0px 10px; padding: 0px; color: #002d72; letter-spacing: normal;\'><button id='test'>click</button></p>"

// document.body.appendChild(button);
// document.body.appendChild(div);

// const buttonFromServer = document.getElementById('test');
// function showMessage1(event){
//     console.log(event.target.id)
//     alert('button from server')
// }
// buttonFromServer.addEventListener('click', showMessage1);

// event bubbling

// const div1 = document.getElementById('div1');

// div1.addEventListener('click', handleClick1, false)


// // const div2 = document.getElementById('div2');

// // div2.addEventListener('click', handleClick2, true)

// // const div3 = document.getElementById('div3');

// // div3.addEventListener('click', handleClick3, true);

// function handleClick1(e){
// alert(e.target.id)
// }


// event capturing

// const div1 = document.getElementById('div1');

// div1.addEventListener('click', handleClick1, false)


// // const div2 = document.getElementById('div2');

// // div2.addEventListener('click', handleClick2, true)

const div1 = document.getElementById('div1');

div1.addEventListener('click', handleClick3, true);

function handleClick3(e){
alert(e.target.id);
e.prevetDefault();
e.stopPropagation();

}

// function handleClick2(e){
//     alert('div2')
// }

// function handleClick3(e){
//     alert('div3')
// }


tbody


