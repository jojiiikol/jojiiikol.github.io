let answer;
answer = prompt("Какой организации вы проходите курс?", '');
if (answer == 'IT-Куб') {
    alert("Верно!");
}
else {
    alert("Неверно! Это IT-куб!");
}

answer = prompt("Введите число", '');
if (answer == 0) {
    alert("Число = 0");
}
else if (answer % 2 == 0) {
    alert("Число четное");
}
else {
    alert("Число нечетное")
}

let login = prompt('Введите логин?', '');

let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';

alert( message );

let i = 3;

while (i) {
  alert( i-- );
}