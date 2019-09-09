/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
const userCountry = prompt('Введите вашу страну для расчета доставки!');
let message;
let cost;
function correctCountry(country) {
  if (country === null || country === '') {
    return null;
  }
  return (
    country.substring(0, 1).toUpperCase()
    + country.substring(1, country.length).toLowerCase()
  );
}

const userCountryCorrect = correctCountry(userCountry);

switch (userCountryCorrect) {
  case 'Китай':
    cost = 100;
    message = `Доставка в ${userCountryCorrect} будет стоить ${cost} кредитов`;
    break;
  case 'Чили':
    cost = 250;
    message = `Доставка в ${userCountryCorrect} будет стоить ${cost} кредитов`;
    break;
  case 'Австралия':
    cost = 170;
    message = `Доставка в ${userCountryCorrect} будет стоить ${cost} кредитов`;
    break;
  case 'Индия':
    cost = 80;
    message = `Доставка в ${userCountryCorrect} будет стоить ${cost} кредитов`;
    break;
  case 'Ямайка':
    cost = 120;
    message = `Доставка в ${userCountryCorrect} будет стоить ${cost} кредитов`;
    break;
  case null:
    message = 'Вы не ввели страну или отменили выбор';
    break;
  default:
    message = 'В вашей стране доставка не доступна';
}

alert(message);
