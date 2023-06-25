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
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
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
  console.log(firstNumber, secondNumber);
};

const count = () => {
  if (firstNumber !== "" && secondNumber !== "") {
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
  });

document
  .querySelector(".calculator__btn--remove")
  .addEventListener("click", () => {
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
  });

document
  .querySelector(".calculator__btn--percent")
  .addEventListener("click", () => {
    anotherFlag = true;
    if (percent === false) {
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
