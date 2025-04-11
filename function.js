// 1. Функція, яка вітає користувача
// function greet(name) {
//     console.log("Привіт, " + name + "!");
// }

// greet("Оля"); // Виведе: Привіт, Оля!
//  name — це параметр. При виклику greet("Оля") — функція отримує "Оля" і виводить вітання.
// greet - ім'я функції

// 2. Функція, яка додає два числа
// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 3);
// console.log(result); // 8

// 3. Функція, яка перевіряє, чи число парне
// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// 4. Функція, яка рахує кількість голосних у слові
// function countVowels(word) {
//     const vowels = "aeiou";
//     let count = 0;

//     for (let letter of word.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Banana")); // 3

// 5. Функція, яка повертає масив квадратів чисел
// function getSquares(numbers) {
//     let result = [];
//     for (let num of numbers) {
//         result.push(num * num);
//     }
//     return result;
// }

// console.log(getSquares([1, 2, 3, 4])); // [1, 4, 9, 16]

// 1. Порахувати суму чисел від 1 до N
// function sumToN(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumToN(5)); // 15 (1+2+3+4+5)

// 2. Порахувати кількість парних чисел від 1 до N
// function countEven(n) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countEven(10)); // 5 (2, 4, 6, 8, 10)

// 5. Вивести таблицю множення для заданого числа
// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }

// multiplicationTable(5);