const screen = document.querySelector(".item1")

const btns = document.querySelectorAll("div[type]") // first

const clear = document.querySelector(".item2")

const delet = document.querySelector(".item3")



const operations = document.querySelectorAll("div[value]")


const equality = document.querySelector(".item18")


let valeur1 = ""
let selected0p=""





clear.addEventListener("click",function(){
    screen.innerText = ""
})

delet.addEventListener("click",function(){
    let str =  screen.innerText
    let newStr = str.slice(0,str.length -1)
    screen.innerText = ""
    screen.append(newStr)
})


for(let btn of btns){
     // event
    btn.addEventListener("click",function(){
        let num = btn.innerText
            console.log(num)
            // append
            screen.append(num)
    })
}

for(let operation of operations){
    operation.addEventListener('click',function(){
        valeur1 = screen.innerText
        console.log("valeur1",valeur1)
        screen.innerText = ""
        selected0p = operation.innerText
        console.log("selectedOp",selected0p)
        screen.innerText = ""
    })
}


function calculate (x , op , y){
    if( op === "÷"){
     return x / y
    } else if(op === "+"){
     return Number(x) + Number(y)
    } else if(op === "×"){
     return x * y
    }else if(op === "−"){
     return x - y
    }
 }

 equality.addEventListener('click',function(){
     let valeur2= screen.innerText
     let result =''
     screen.innerText =''
     result = calculate(valeur1,selected0p,valeur2)
     console.log(result)
      screen.append(result)
     });