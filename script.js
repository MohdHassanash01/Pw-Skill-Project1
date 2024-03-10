let button3 = document.querySelector(".button3")
console.log(button3);

button3.style.padding = '4px 15px'
button3.style.fontSize = '35px'
button3.style.fontWeight = '600'
button3.style.color = 'white'
button3.style.backgroundColor = 'rgb(216,42,42)'
button3.style.border = '3px solid transparent'
button3.style.borderRadius = '10px'
button3.style.marginTop = '50px'

button3.addEventListener("mouseenter",function(){
    button3.style.backgroundColor = 'white'
    button3.style.border = '3px solid rgb(216,42,42)'
    button3.style.color = 'rgb(216,42,42)'
})


button3.addEventListener("mouseleave",function(){
    button3.style.backgroundColor = 'rgb(216,42,42)'
    button3.style.border = '3px solid transparent'
    button3.style.color = 'white'
})


let sign = document.querySelector("#sign")
console.log(sign);

sign.style.padding = '2px 10px'
sign.style.fontSize = '18px'
sign.style.fontWeight = '600'
sign.style.color = 'white'
sign.style.backgroundColor = 'rgb(216,42,42)'
sign.style.border = '3px solid transparent'
sign.style.borderRadius = '5px'

sign.addEventListener("mouseenter",function(){
    sign.style.backgroundColor = 'white'
    sign.style.border = '3px solid rgb(216,42,42)'
    sign.style.color = 'rgb(216,42,42)'
})


sign.addEventListener("mouseleave",function(){
    sign.style.backgroundColor = 'rgb(216,42,42)'
    sign.style.border = '3px solid transparent'
    sign.style.color = 'white'
})

let count = 0
sign.addEventListener("click",function(){

    if (count == 0) {
        
        sign.innerHTML = 'Log In'
        alert("Log In")

        count ++;
    } else {
        
        sign.innerHTML = 'Sign Up'
        count --;
    }
})

let order = document.querySelector("#order")
console.log(order);

order.style.padding = '2px 15px'
order.style.fontSize = '18px'
order.style.fontWeight = '600'
order.style.color = 'white'
order.style.backgroundColor = 'rgb(216,42,42)'
order.style.border = '3px solid transparent'
order.style.borderRadius = '5px'

order.addEventListener("mouseenter",function(){
    order.style.backgroundColor = 'white'
    order.style.border = '3px solid rgb(216,42,42)'
    order.style.color = 'rgb(216,42,42)'
})


order.addEventListener("mouseleave",function(){
    order.style.backgroundColor = 'rgb(216,42,42)'
    order.style.border = '3px solid transparent'
    order.style.color = 'white'
})



let nav = document.querySelectorAll(".nav-part2 h3")
console.log(nav);

nav.forEach(function(item){

    item.addEventListener("mouseenter",function(){
        item.style.border = '2px solid rgb(255, 251, 4) '
        item.style.borderRadius = '5px'

    })


    item.addEventListener("mouseleave",function(){
        item.style.border = '2px solid transparent'
        item.style.borderRadius = '5px'

    })

})



// Anonymous function 


const getFullName = function (firstname,lastname) {
    return firstname+" "+lastname
}
console.log(getFullName("hassan","ashraf"));



// immediately invoked function 

(function(x) {
    console.log(x*x);
})(5);


// function without parameter 

function handle(){
    console.log("handle Function ");
}

handle()

// function with multiple parameter 
 
function sum(a,b){
    return a+b;
}
let total1 = sum(2,2)
console.log(total1);


// function with unlimited parameter 


function sumOfAllparameter(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
         sum = sum + arguments[i];
        
    }
    return sum
   
}
const total = sumOfAllparameter(1,2,3,4,5,6,7)

console.log(total);


function retureValue(){
    return'I am learning javaScript from Pw skills'
}

let message = retureValue()
console.log(message.toUpperCase());

const NewMessage = message + ", enroll today"
console.log(NewMessage);


function passMessage(coursename,EnrollMessage = "enroll karo harami"){
    return "I am happy to learn "+ coursename + "from Pw Skills by Chirag Goyal" + EnrollMessage 
}

console.log(passMessage('full stack development',"enroll today"));

console.log(passMessage('web development',"enroll tomorrow"));

console.log(passMessage('front development'));

console.log(passMessage('Backend development'));

let headind = document.querySelectorAll(".main h1")
headind.forEach(function(item){

    item.addEventListener("mouseenter",function(){
   
    item.style.WebkitTextStroke = '2px rgb(255, 251, 4)'
    item.style.color = 'black'
    })


    
    item.addEventListener("mouseleave",function(){
   
        item.style.WebkitTextStroke = '2px transparent'
        item.style.color = 'rgb(255, 251, 4)'
        })
})


