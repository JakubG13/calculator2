const numberBtns = document.querySelectorAll(".calculator__btn--number");
const markBtns = document.querySelectorAll(".calculator__btn--mark");
const screen = document.querySelector(".screen__text");

let flag = true;
let firstNumber = "";
let secondNumber = "";
let mark = "";
let percent = false;
let text = screen.textContent;
let anotherFlag = true;
const checkLength = ()=>{
  if(screen.textContent.length >= 16){
    screen.style.fontSize = "2.3rem"
  }
  else if(screen.textContent.length >= 15){
    screen.style.fontSize = "2.5rem"
  }
  else if(screen.textContent.length >= 14){
    screen.style.fontSize = "2.7rem"
  }
  else if(screen.textContent.length >= 13){
    screen.style.fontSize = "2.9rem"
  }
  else if(screen.textContent.length >= 12){
    screen.style.fontSize = "3.1rem"
  }
  else if(screen.textContent.length >= 11){
    screen.style.fontSize = "3.4rem"
  }
  else if(screen.textContent.length >= 10){
    screen.style.fontSize = "3.7rem"
  } else if (screen.textContent.length < 10){
    screen.style.fontSize = "4rem"

  }
}

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
checkLength()
    if (firstNumber !== "" && percent === true && anotherFlag) {
      return;
    } else {
      if (flag) {
        screen.textContent = "";
      }
      screen.textContent += btn.textContent;
      flag = false;
      firstNumber += btn.textContent;
    }
  })
);

markBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (firstNumber !== "") {
      anotherFlag = false;
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
    }
  })
);
const removePercentFromNumbers = () => {
  if (firstNumber.indexOf("%") !== -1) {
    firstNumber = [...firstNumber];
    let firstNumberIndex = firstNumber.indexOf("%");
    firstNumber.splice(firstNumberIndex, 1);
    firstNumber = firstNumber.join("");
  } else if (secondNumber.indexOf("%") !== -1) {
    secondNumber = [...secondNumber];
    let secondNumberIndex = secondNumber.indexOf("%");
    secondNumber.splice(secondNumberIndex, 1);
    secondNumber = secondNumber.join("");
  }
};

const count = () => {
  if (firstNumber !== "" && secondNumber !== "") {
    firstNumber = firstNumber + "";
    if (percent === true && mark === "+") {
      if (firstNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent =
          ((firstNumber * 1) / 100) * (secondNumber * 1) + secondNumber * 1;
      } else if (secondNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent =
          ((secondNumber * 1) / 100) * (firstNumber * 1) + firstNumber * 1;
      }
    } else if (percent === true && mark === "-") {
      if (firstNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent =
          secondNumber * 1 - ((firstNumber * 1) / 100) * (secondNumber * 1);
      } else if (secondNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent =
          ((secondNumber * 1) / 100) * (firstNumber * 1) - firstNumber * 1;
      }
    } else if (percent === true && mark === "*") {
      if (firstNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent = ((firstNumber * 1) / 100) * secondNumber;
      } else if (secondNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent = ((secondNumber * 1) / 100) * firstNumber;
      }
    } else if (percent === true && mark === "/") {
      if (firstNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent = (secondNumber * 1) / ((firstNumber * 1) / 100);
      } else if (secondNumber.indexOf("%") !== -1) {
        removePercentFromNumbers();
        screen.textContent = (secondNumber * 1) / 100 / (firstNumber * 1);
      }
    } else if (mark === "+") {
      screen.textContent = secondNumber * 1 + firstNumber * 1;
    } else if (mark === "-") {
      screen.textContent = secondNumber * 1 - firstNumber * 1;
    } else if (mark === "/") {
      screen.textContent = ((secondNumber * 1) / firstNumber) * 1;
    } else if (mark === "*") {
      screen.textContent = secondNumber * 1 * firstNumber * 1;
    }
    firstNumber = screen.textContent;
    secondNumber = "";
    percent = false;
  }
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
    percent = false;
    anotherFlag = true;
    checkLength()
  });

document
  .querySelector(".calculator__btn--remove")
  .addEventListener("click", () => {
    checkLength()
    firstNumber = firstNumber + "";
    firstNumber = [...firstNumber];

    index = firstNumber.length - 1;
    firstNumber.splice(index, 1);
    firstNumber = firstNumber.join("");
    screen.textContent = "";
    if (secondNumber) {
      screen.textContent += secondNumber;
      screen.textContent += mark;
    }
    screen.textContent += firstNumber;
    if (screen.textContent === "") {
      screen.textContent = 0;
      flag = true;
    }
    text = screen.textContent;
    text = [...text];
    if (text.indexOf("%") === -1) {
      percent = false;
    }
  });

document
  .querySelector(".calculator__btn--switch")
  .addEventListener("click", () => {
    firstNumber = firstNumber + "";
    if (firstNumber.indexOf("%") === -1) {
      if (secondNumber !== "" && firstNumber === "") {
        return;
      } else {
        firstNumber = -firstNumber;
      }
      if (firstNumber !== "") {
        screen.textContent = firstNumber;
      }
      if (firstNumber !== "" && secondNumber !== "") {
        screen.textContent = secondNumber + mark + firstNumber;
      }
    }
  });

document
  .querySelector(".calculator__btn--percent")
  .addEventListener("click", () => {
    anotherFlag = true;
    if (percent === false && firstNumber > 0) {
      firstNumber += "%";
      if (firstNumber !== "") {
        screen.textContent = firstNumber;
      }
      if (firstNumber !== "" && secondNumber !== "") {
        screen.textContent = secondNumber + mark + firstNumber;
      }

      percent = true;
    }
  });
