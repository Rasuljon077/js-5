let a = +prompt("son kirgazing")
while (isNaN(a) || a == "") {
    if (a == "") {
        a = +prompt("0 dan boshqa son kirgazing")
    }else{
        a = +prompt("son kirgazing") 
    }
}

let b = "Qoy"
let c = "lar"

// var l = k + " qoy " + c
 
    for (var k = 0; k < a; k++) {
       if (a < 2) {
        console.log(b);
       }else{
       console.log( b + "... " + b + c + "...");
       }
       
    }

let name = prompt("ismingizni kiriting")
let year = prompt("hozirgi yilni kiriting")
let bornAge = prompt("togilgan yilingizni kiriting")
let yourAge = year - bornAge
// console.log(yourAge);

function getName(name) {
    console.log(`sizning ismingiz ${name}`);
    console.log(`siz ${yourAge} yoshdasiz`);
}
console.log(getName(name));

// function random(min,max) {
//     return Math.round(Math.random() * (min - max) + min)
// }

// function icons () {
//     let c = random(50,100)
//     let d = random(100,1000)
//     return ` ${c}, ${d}`
// }
// console.log(icons());

let addNumber = +prompt("son kirgazing")
while (isNaN(addNumber) || addNumber == "0") {
    if (addNumber == "") {
        addNumber = prompt("0 dan boshqa sonni kirgazing")
    }else{
        addNumber = prompt("son kirgazing")
    }
}

let chess = " "

for (let i = 1; i <= addNumber; i++) {
  
    for (let k = 1; k <= addNumber; k++) {
        
        if (i == 1 || k == 1 || i == addNumber || k == addNumber || i == k ) {
            chess = chess + "[8]"
        }else{
            chess = chess + "   "
        }
        
    }
    console.log(chess);
    chess = " "
}



