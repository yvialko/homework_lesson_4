
//  Без параметрів:
// const sayHi = () => {
//     console.log("Привіт!");
//   };
// //   sayHi();
// Один параметр (можна без дужок):
//   const square = x => {
//     return x * x;
//   };
//   console.log(square(5)); 
// Короткий запис (якщо тільки return):
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); // 6
// // У поєднанні з масивами:
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// Перепишіть з використанням стрілкових функцій
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
  );