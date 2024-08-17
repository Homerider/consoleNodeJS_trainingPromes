import axios, {isCancel, AxiosError} from 'axios';
import {DateTime} from "luxon";
import fetch from 'node-fetch'; //поставил доп библиотек, думал в ней дело, оказалось ошибка в url ;)


// axios.get('https://icherniakov.ru/yt-course/account/test_accounts')
//     .then(response => {
//         console.log(response.data);
//     })


// fetch('https://icherniakov.ru/yt-course/account/test_accounts')
//     .then(response => {
//             return response.json();
//     })
//     .then(data => {
//             console.log(data);
//     })


// const url = 'https://icherniakov.ru/yt-course/account/test_accounts';
//
// async function user() {
//         const response = await axios.get(url);
//         console.log(response.data);
// }
// user();



// Тренировка:
// const items = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve ('Я понял что такое Промисы')
//     }, 3000);
// })
//
// // items.then(resolve => console.log(resolve));
//
// async function pup() {
//     const fin = await items
//     console.log(fin)
// }
// pup()

// let time = DateTime.now()
// let second = time.plus({hour:12})
// console.log(time.diff(second))

// axios.get('http://yandex.ru')
//     .then(res => {
//         console.log(res);
//     })
