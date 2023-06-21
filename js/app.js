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
    mark = btn.textContent
    screen.textContent = firstNumber + mark
    secondNumber = firstNumber
    firstNumber = ""
}))

document.querySelector(".calculator__btn--equal").addEventListener("click",()=>{
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
})