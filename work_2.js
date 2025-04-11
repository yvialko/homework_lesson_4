// 1. Створи новий масив тільки з парних чисел:
// let numbers = [4, 7, 10, 13, 16, 19];
// // Результат: [4, 10, 16]
// let new_array = [];
// for (i = 0; i < numbers.length; i++) {
//     let new_value = numbers[i];
//     if ( new_value % 2 === 0) {
//         new_array.push(new_value)
//     }
// };
// console.log(new_array);

// // 2. Порахуй суму всіх чисел у масиві, які діляться на 3:
// let nums = [3, 5, 9, 10, 12, 17];
// let sum = 0; // одразу задаємо як нуль, тому що будь яке число + 0 буде те саме число
// // Результат: 3 + 9 + 12 = 24
// for (i = 0; i < nums.length; i++) {  
//     if (nums[i] % 3 === 0) {
//         sum += nums[i]; // 1.0+3=3 --> sum=3 2.3+9=12 --> sum =12 3. 12+12=24 --> sum = 24
//     }
// };
// console.log(sum);
// 3. Знайди найдовше слово в масиві:
let words = ["apple", "banana", "pear", "watermelon", "kiwi"];
// // Результат: "watermelon"
// // console.log(words[0].length);
// let longestWorld = ""; // задаємо нову змінну, вона буде пустою стрінгою бо будь яке слово із массиву буде довше за неї
// for (i = 0; i < words.length; i++) {
//     if (words[i].length > longestWorld.length){
//         longestWorld = words[i];
//     }
// }
// console.log(longestWorld);
// У кожній ітерації перевіряємо: якщо довжина поточного слова більша — оновлюємо longestWorld.
// Альтернативний варіант знайшла в інеті
// let longest = words.reduce((a, b) => (b.length > a.length ? b : a));
// console.log("Найдовше слово:", longest);
// Метод reduce() проходиться по масиву і накопичує значення (reduce → звести до одного результату).
// Аргументи
// (a, b) => (b.length > a.length ? b : a)
// a — це поточне "найкраще" значення, тобто найдовше слово на поточному кроці.
// b — це наступне слово з масиву, яке ми порівнюємо з a.
// Спочатку a = "apple", b = "banana"
// → "banana".length > "apple".length → a = "banana"

// Потім a = "banana", b = "pear"
// → "pear".length < "banana".length → a залишається "banana"

// a = "banana", b = "watermelon"
// → "watermelon" довше → a = "watermelon"

// a = "watermelon", b = "kiwi"
// → "kiwi" коротше → залишаємо "watermelon"

// // 4. Виведи лише ті числа, які більші за середнє значення масиву:
// let nums = [10, 20, 30, 40, 50];
// // Середнє: 30 → результат: [40, 50]
// let sum = 0;
// for ( i = 0; i < nums.length; i++){
//      sum += nums[i];
// }
// let average = sum / nums.length;
// let result = [];
// for ( i = 0; i < nums.length; i++){
//     if (nums[i] > average) {
//         result.push(nums[i]);
//     }
// }

// console.log(average);
// console.log(result); 

//  5. Розверни масив "вручну" (без .reverse())
let arr = [1, 2, 3, 4, 5];
// Результат: [5, 4, 3, 2, 1]
let newArray = [];
for ( i = 0; i < arr.length; i ++) {
    newArray.splice(arr[i]);
}
console.log(newArray);