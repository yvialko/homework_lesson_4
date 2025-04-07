// let temperature = 33;
// let temperatureResult;
// if (temperature < 25){
//     temperatureResult = "Холодно";
// }
// else {temperatureResult = "Гаряче";
// }
// console.log(temperatureResult);
// export { temperatureResult, temperature };

//Через тернарний оператор
// let temperature = 8;
// let temperatureResult = temperature < 25 ? "Холодно" : "Гаряче";
// console.log(temperatureResult);

// 1. Температурний статус
// Напиши код, який виводить:
// "Дуже холодно" при температурі нижче 0
// "Холодно" від 0 до 15
// "Нормально" від 16 до 25
// "Жарко" від 26 до 35
// "Дуже жарко" понад 35

// let temperature = 9;
// let temperatureStatus;
// if (temperature < 0) {
//     temperatureStatus = "Дуже холодно";
// } else if (temperature >= 0 && temperature <= 15) {
//     temperatureStatus = "Холодно";
// } else if (temperature >= 16 && temperature <= 25) {
//     temperatureStatus = "Нормально";
// } else if (temperature >= 26 && temperature <= 35) {
//     temperatureStatus = "Жарко";
// } else {
//     temperatureStatus = "Дуже жарко";
// }

// console.log(temperatureStatus);

// 2. Привітання залежно від часу
// Створи змінну hour (від 0 до 23)
// Напиши привітання:
// до 12 – "Доброго ранку"
// з 12 до 18 – "Доброго дня"
// після 18 – "Доброго вечора"

// let hour = "test";
// let salutation;
// if (hour >= 0 && hour < 12) {
//     salutation = "Доброго ранку";
// } else if (hour >= 12 && hour < 18) {
//     salutation = "Доброго дня";
// } else if (hour >= 18 && hour < 24) {
//     salutation = "Доброго вечора";
// } else {
//     //salutation = "Невірне значення години";
//     if (typeof hour !== "number" || hour < 0 || hour >= 24) {
//         salutation = "Невірне значення години";
//     }
// }    

// console.log(salutation);

// 3. Перевірка бюджету
// Є ціна товару та бюджет користувача. Напиши код, який:
// Виведе "Можна купити" якщо бюджету достатньо
// Інакше "Недостатньо грошей"

// let price = 101;
// let budget = 100;
// if (price <= budget){
//     console.log("Можна купити")
// } else {
//     console.log("Недостатньо грошей")
// }

// Знижка за вік
// Користувач вводить свій вік. Вивести:
// "Дитина" якщо до 12
// "Підліток" якщо до 18
// "Дорослий" якщо до 60
// "Пенсіонер" якщо 60+

// let age = 99;
// let you_are;
// if (age < 12) {
//     you_are = "Дитина";
// } else if (age >= 12 && age <18) {
//     you_are = "Підліток";
// } else if (age >= 18 && age < 60) {
//     you_are = "Дорослий"
// } else {
//     you_are = "Пенсіонер"
// }

// console.log(you_are);

// Є змінна score (від 0 до 100)
// Виведи:
// "Не здано" — менше 50
// "Задовільно" — від 50 до 69
// "Добре" — 70–89
// "Відмінно" — 90–100

let score = 49;
let description;

if (score < 50) {
    description = "Не здано";
} else if (score >= 50 && score <= 69) {
    description = "Задовільно";
} else if (score >= 70 && score <= 89) {
    description = "Добре";
} else if (score >= 90 && score <= 100) {
    description = "Відмінно";
} else {
    description = "Не існуюче значення оцінки";
}

console.log(description);