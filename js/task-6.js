/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-alert */
let input;
let total = 0;
let isCancel = 0;

function parsInput(userInput) {
  const userNumber = Number(userInput);
  if (Number.isNaN(userNumber)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number(input);
  }
}
do {
  input = prompt("Введите любое число!");
  if (input === null) {
    isCancel = 1;
  } else {
    parsInput(input);
  }
} while (isCancel === 0);
alert(`Общая сумма чисел равна ${total}`);
