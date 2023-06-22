const numberBtns = document.querySelectorAll(".calculator__btn--number")
const markBtns = document.querySelectorAll(".calculator__btn--mark")
const screen = document.querySelector(".screen__text")
let flag = true
let firstNumber = ""
let secondNumber = ""
let mark = ""

numberBtns.forEach(btn => btn.addEventListener("click",()=>{
   if(flag){
screen.textContent = ""
   }
screen.textContent += btn.textContent
flag = false
firstNumber += btn.textContent
}))


markBtns.forEach(btn => btn.addEventListener("click",()=>{
   
    if(firstNumber !== "" && secondNumber !== ""){
        count()
        mark = btn.textContent
        firstNumber = screen.textContent
        screen.textContent += mark
        
    } else if(firstNumber !== ""){
    mark = btn.textContent
    screen.textContent = firstNumber + mark
   
    } 
         else
{
    mark = btn.textContent
    screen.textContent = firstNumber + mark
    }
    secondNumber = firstNumber
    firstNumber = "" 
    console.log(mark) 
    console.log(firstNumber)
    console.log(secondNumber)
}))



const count = ()=>{
    if(mark === "+"){
screen.textContent = secondNumber * 1 + firstNumber * 1
    }
    else if (mark === "-"){
        screen.textContent = secondNumber * 1 - firstNumber * 1
    }
    else if (mark === "/"){
        screen.textContent = secondNumber * 1 / firstNumber * 1
    }
    else if (mark === "*"){
        screen.textContent = secondNumber * 1 * firstNumber * 1
    }
}

document.querySelector(".calculator__btn--equal").addEventListener("click",count)