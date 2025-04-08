// for (початок; умова; крок) {
//     // ... тіло циклу ...
//   }

// 1 - Вивести числа від 1 до 10
// for ( i = 1; i <= 10; i++) {
//     console.log("order" + " - " + i)
// };

// 2 - Вивести парні числа від 2 до 20
// for (let i = 2; i <= 20; i += 2) { //одразу задали змінну в умові, присвоєли їй значення 2 - це перше парне число та становили крок 2
//     console.log(i + " - парне число");
// };
// другий варіант:
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " - парне число");
//     }
// };
// // ще трошки витрибеньок:
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " - парне число");
//     } else {
//         console.log(i + " - нам це не підходить");
//     }
// }

// 3 - Порахувати суму чисел від 1 до N (N вводить користувач)
// let N = 9;
// for (i = 0; i <=N; i++) {
//     let result = (N += i);
//     console.log(result)
// }; //--> пішов у нескінченність тому що N змінюється всередені циклу!!!!!

// let N = 89;
// let result = 0;

// for (let i = 0; i <= N; i++) {
//     result += i; // result = result + 1 --> 0 + 0 
//     //console.log("На кроці", i, "сума:", result);
// }

// console.log("Загальна сума:", result);
// 4 - Вивести кожен другий елемент з масиву
// let items = ["яблуко", "банан", "груша", "виноград", "персик", "слива"];
// for(let i = 1; i < items.length; i +=2) {

//     console.log("position in the array " + (i + 1) + " " + items[i]);
// };

// 5 - Вивести рядки, які містять літеру "a" - не я
// let words = ["dog", "cat", "rabbit", "cow", "ant"];
// // Результат: cat, rabbit, ant
// for (let i = 0; i < words.length; i++) {
//     if (words[i].includes("a")) {
//         console.log(words[i]);
//     }
// };


// // 6 - Створити новий масив з чисел, піднесених до квадрату
// let numbers = [1, 2, 3, 4];
// let new_array = [];
// // Результат: [1, 4, 9, 16]
// for(i = 0; i < numbers.length; i++) {
//     new_value = Math.pow(numbers[i], 2);
//     new_array.push(new_value);
// }
// console.log(new_array);