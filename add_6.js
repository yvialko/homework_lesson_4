// Перевірка знаку числа
// Функція приймає число і повертає "Додатне", "Від’ємне" або "Нуль".
// function numberCheck(numb){
//     if (numb > 0){
//         return "Додатне"
//     } else if (numb < 0) {
//         return "Від’ємне"
//     } else {
//         return "Нуль"
//     }
// }
// console.log(numberCheck(0));

// Перевірка дільності на 3 і 5
// Функція приймає число і виводить:
// "Ділиться на 3 і 5", якщо ділиться на обидва
// "Ділиться на 3", якщо тільки на 3
// "Ділиться на 5", якщо тільки на 5
// "Не ділиться ні на 3, ні на 5" — інакше
// function result(numb){
//     if ( numb % 3 === 0 && numb % 5 === 0){
//         return "Ділиться на 3 і 5"
//     } else if (numb % 3 === 0) {
//         return "Ділиться на 3"
//     } else if (numb % 5 === 0) {
//         return "Ділиться на 5"
//     } else {
//         return "Не ділиться ні на 3, ні на 5"
//     }    
// }

// console.log(result(11));

// Рандомне число та округленн. Згенеруй випадкове число від 1 до 100 і виведи:
// округлене вниз (Math.floor)
// округлене вгору (Math.ceil)
// округлене звичайно (Math.round)
function randomNumber() {
    let numb = (Math.random() * 99 +1);
    console.log(numb);
    console.log(Math.floor(numb));
    console.log(Math.ceil(numb));
    console.log(Math.round(numb));
}

randomNumber();