// if (username == "") {
//     var username = prompt("Введи свое имя:");
// } else {
//     console.log("Ваше имя уже засчитано в данных браузера.");
// }

// alert(prompt("Введите свое имя:"))

const login = () => {
    var username = prompt("Введи свое имя:");

    localStorage.setItem('theuserkey', username);

    document.getElementsByClassName("username")[0].textContent = localStorage.getItem('theuserkey');
};

var name = username

// if (name == "") {
//     console.log("Ваше имя уже засчитано в данных браузера.");
// } else {
//     username = prompt("Введи свое имя:");
// }

// var username = prompt("Введи свое имя:");

// console.log("Имя засчитано в браузере:", username);

// localStorage.setItem(username, this.value);

// localStorage.setItem('theuserkey', name);
// console.localStorage.getItem('theuserkey')