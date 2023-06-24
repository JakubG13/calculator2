const numberBtns = document.querySelectorAll(".calculator__btn--number");
const markBtns = document.querySelectorAll(".calculator__btn--mark");
const screen = document.querySelector(".screen__text");
let flag = true;
let firstNumber = "";
let secondNumber = "";
let mark = "";

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (flag) {
      screen.textContent = "";
    }
    screen.textContent += btn.textContent;
    flag = false;
    firstNumber += btn.textContent;
  })
);

markBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "") {
      count();
      mark = btn.textContent;
      firstNumber = screen.textContent;
      screen.textContent += mark;
      secondNumber = firstNumber;
      firstNumber = "";
    } else if (firstNumber !== "") {
      mark = btn.textContent;
      screen.textContent = firstNumber + mark;
      secondNumber = firstNumber;
      firstNumber = "";
    } else {
      mark = btn.textContent;
      screen.textContent = secondNumber + mark;
    }
  })
);

const count = () => {
  if (firstNumber !== "" && secondNumber !== ""){
  if (mark === "+") {
    screen.textContent = secondNumber * 1 + firstNumber * 1;
  } else if (mark === "-") {
    screen.textContent = secondNumber * 1 - firstNumber * 1;
  } else if (mark === "/") {
    screen.textContent = ((secondNumber * 1) / firstNumber) * 1;
  } else if (mark === "*") {
    screen.textContent = secondNumber * 1 * firstNumber * 1;
  }}
  firstNumber = screen.textContent
  secondNumber = ""
};

document
  .querySelector(".calculator__btn--equal")
  .addEventListener("click", count);

document
  .querySelector(".calculator__btn--clear")
  .addEventListener("click", () => {
    flag = true;
    firstNumber = "";
    secondNumber = "";
    mark = "";
    screen.textContent = 0;
  });

document
  .querySelector(".calculator__btn--remove")
  .addEventListener("click", () => {
  firstNumber = firstNumber + ""
    firstNumber = [...firstNumber]
    
    index = firstNumber.length - 1
    firstNumber.splice(index, 1)
firstNumber = firstNumber.join("")
screen.textContent = ""
if (secondNumber) {
  screen.textContent += secondNumber;
  screen.textContent += mark;
}
screen.textContent += firstNumber;
if(screen.textContent === ""){
  screen.textContent = 0
  flag = true
}
  });


  document.querySelector(".calculator__btn--switch").addEventListener("click",()=>{
    if(secondNumber !== "" && firstNumber === ""){
      return
    } else {
      firstNumber = -firstNumber
    }
    if(firstNumber !== ""){
      screen.textContent = firstNumber
    }
    if(firstNumber !== "" && secondNumber !== ""){
      screen.textContent = secondNumber + mark + firstNumber
    }
  })
