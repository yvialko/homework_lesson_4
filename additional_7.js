var book = {
    title: "Fahrenheit 451",
    author: "George Orwell",
    year: 1953
}
console.log(book);
console.log(book.year); 
console.log(book["title"]);

//Оператор in перевіряє, чи існує властивість у об'єкті (включаючи властивості, що успадковані через прототип).
console.log("title" in book);   // true
//Метод hasOwnProperty()
//Метод hasOwnProperty() перевіряє, чи має об'єкт власну властивість (не успадковану через прототип).
console.log(book.hasOwnProperty("title"));   // true

console.log(book.title !== undefined);   // true
console.log(book["title"] !== undefined);  // true

console.log(Object.keys(book).length);