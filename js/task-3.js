/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
const CANCELED_BY_USER = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('');
let message;

if (userSaid === null) {
  message = CANCELED_BY_USER;
  console.assert(userSaid === null && message === CANCELED_BY_USER);
}
if (userSaid === ADMIN_PASSWORD) {
  message = WELCOME;
  console.assert(userSaid === ADMIN_PASSWORD && message === WELCOME);
}
if (userSaid !== ADMIN_PASSWORD && userSaid !== null) {
  message = ACCESS_DENIED;
  console.assert(
    userSaid !== ADMIN_PASSWORD
        && userSaid !== null
        && message === ACCESS_DENIED,
  );
}

alert(message);
