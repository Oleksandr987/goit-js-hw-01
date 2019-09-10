/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const NOT_ENOUGH_FUNDS = 'Недостаточно средств на счету!';
const droidQuntity = prompt();
const totalPrice = pricePerDroid * droidQuntity;
const balanceCredits = credits - totalPrice;
const CALCULATION = `Вы купили ${droidQuntity} дроидов, на счету осталось ${balanceCredits} кредитов.`;


function droidOrder(Order) {
  if (Order === null) {
    return CANCELED_BY_USER;
  }
  if (totalPrice > credits) {
    return NOT_ENOUGH_FUNDS;
  }
  return CALCULATION;
}

alert(droidOrder(droidQuntity));
