let adminLogin = 'admin';
let adminPassword = 'password';
let login = null;
let password = null;


login = prompt('Введите логин');

if (login == adminLogin) {
    console.log('Привет, админ!');
    password = prompt('Введите пароль')

    if (password == adminPassword) {
        console.log('Успешый вход');
    } else if (password == null || password == '') {
        console.log('Отменено');
    } else {
        console.log('Неправильный пароль')
    }
} else if (login == null || login == '') {
    console.log('Отменено');
} else if (login !== adminLogin) {
    console.log('Такого пользоваетеля не существует');
}