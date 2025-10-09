let email = document.querySelector('#email');
let password = document.querySelector('#Password');
let btn = document.querySelector('#submitform');


// function submitForm() {
//     console.log(email.value);
//     console.log(password.value);
// }

// function test(){
//     console.log("working");
// }


// btn.addEventListener("click", () => {
//     console.log("Event Handler 01");
// })
// let handler = () => {
//     console.log("Event Handler 02");
// }
// btn.addEventListener("click", handler)
// btn.addEventListener("click", () => console.log("Event Handler 03"));
// btn.removeEventListener('click', handler)


// let currentMode = 'light';
// document.getElementById('modebtn').addEventListener('click', () => {
//     if (currentMode === 'light') {
//         currentMode = 'dark'
//         console.log(currentMode);
//         document.querySelector('body').style.backgroundColor = 'black'
//         document.querySelector('#modebtn').style.color = 'white'


//     } else {
//         currentMode = 'light'
//         console.log(currentMode);
//         document.querySelector('body').style.backgroundColor = 'white'
//         document.querySelector('#modebtn').style.color = 'black'
//     }
// })

// document.getElementById("colors").addEventListener("change", function (e) {
//     document.body.style.backgroundColor = e.target.value;
//     console.log(e.target.value);

// });

// document.getElementById('radios').addEventListener('change',(event)=>{
//     console.log(event.target.value);
//     document.body.style.backgroundColor = event.target.value

// })
// document.querySelectorAll('input[name="payment"]').forEach((option) => {
//     option.addEventListener("change", (e) => {
//         console.log("You selected:", e.target.value);
//     });
// });

// function chageColor() {
//     var main = document.getElementById('main');
//     if (main.className === 'box') {
//         main.className = 'test'
//     }else {
//         main.className = 'box'   
//     }
// }