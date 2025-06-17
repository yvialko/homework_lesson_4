//1. Порахуй голосні
//Завдання: Напиши функцію countVowels(str), яка рахує кількість голосних букв (a, e, i, o, u) у рядку.

function countVowels(str) {
    let vowels = 'aeiouаеєиіїоуюя'; // тут я задаю діапазан тих голосних літер які маю шукати в рядку
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) count++; // це безпосередньо лічильник - якщо літера знайдена, то лічільник робить + 1
    }
    return count;
  }

// let — оголошення змінної.
// char — ім’я змінної, яка представляє один символ.
// of — оператор для перебору елементів (масиву, рядка тощо).
// str — змінна, яка містить рядок (наприклад "Привіт").
console.log(countVowels("Україна")); 

let result = countVowels("Україна");
// Тепер result можна передати іншій функції або обробити:
console.log("Використання змінної result:", result);

let word = "Україна";
console.log(`У слові "${word}" є ${countVowels(word)} голосних.`);
////////////////////////////////////////////////////////////////////
//2. Перевірка на паліндром
//Завдання: Напиши функцію isPalindrome(str), яка перевіряє, чи слово читається однаково в обидві сторони.
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, ''); //приводимо всі літери до нижнього регістру, а потім замінюємо всі символами, що не є літерами на пусту стрінгу, через регулярний вираз
    return cleaned === cleaned.split('').reverse().join(''); // 
  }

let result1 = isPalindrome("CoocL");
console.log("Якщо слово є поліндромом, то повернуться true, якщо ні, то - false");  
let checkWord = "Pool";
console.log(`Слово "${checkWord}" поліндром чи ні? Якщо слово є поліндромом, то повернуться true, якщо ні, то - false. Результат - ${isPalindrome(checkWord)} `);