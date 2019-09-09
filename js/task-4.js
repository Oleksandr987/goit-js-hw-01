/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const NOT_ENOUGH_FUNDS = 'Недостаточно средств на счету!';
const droidQuntity = prompt();
let message;
const totalPrice = pricePerDroid * droidQuntity;
const balanceCredits = credits - totalPrice;
const CALCULATION = `Вы купили ${droidQuntity} дроидов, на счету осталось ${balanceCredits} кредитов.`;
if (droidQuntity === null) {
  message = CANCELED_BY_USER;
  console.assert(droidQuntity === null && message === CANCELED_BY_USER);
} else if (droidQuntity > 8) {
  message = NOT_ENOUGH_FUNDS;
  console.assert(totalPrice > credits && message === NOT_ENOUGH_FUNDS);
} else if (droidQuntity < 8) {
  message = CALCULATION;
  console.assert(totalPrice < credits && message === CALCULATION);
}
alert(message);
