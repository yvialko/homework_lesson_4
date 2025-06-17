// function randomPassword(length) {
//     const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//     const numb = '0123456789';
//     const allSymbol = upperCase + lowerCase + numb;
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allSymbol.length);
//         password += allSymbol.charAt(randomIndex);
//     }
//     return password;
// }

// // Задайте бажану довжину пароля
// const passwordLength = 12;
// let userPassword = randomPassword(passwordLength);

// // pm.collectionVariables.set('password', userPassword);
// console.log('Згенерований пароль:', userPassword);



// function randomPassword(length) {
//     const setUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const setLowerCase = 'abcdefghijklmnopqrstuvwxyz';
//     const setNumbers = '0123456789';
//     const allSets = setUpperCase + setLowerCase + setNumbers;
//     let password = '';

//     // Гарантовано додаємо хоча б один символ кожного типу
//     password += setUpperCase.charAt(Math.floor(Math.random() * setUpperCase.length));
//     password += setLowerCase.charAt(Math.floor(Math.random() * setLowerCase.length));
//     password += setNumbers.charAt(Math.floor(Math.random() * setNumbers.length));

//     // Додаємо решту випадкових символів до потрібної довжини
//     for (let i = password.length; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allSets.length);
//         password += allSets.charAt(randomIndex);
//     }

//     // Перемішуємо символи в паролі для більшої випадковості
//     password = password.split('').sort(() => Math.random() - 0.5).join('');

//     return password;
// }

// // Задайте бажану довжину пароля (від 8 до 15)
// const passwordLength = Math.floor(Math.random() * (15 - 8 + 1)) + 8; // Генеруємо випадкову довжину в межах 8-15

// let userPassword = randomPassword(passwordLength);

// // pm.collectionVariables.set('password', userPassword);
// console.log('Згенерований пароль:', userPassword);

const fs = require('fs').promises;
const path = require('path');

async function convertImageToBase64Node(imagePath) {
  try {
    const fileData = await fs.readFile(imagePath);
    const base64String = fileData.toString('base64');
    return base64String;
  } catch (error) {
    console.error('Помилка:', error);
    throw error;
  }
}

// Використання:
const imageFilePath = path.join(__dirname, '5713_1.jpg'); // Або .png

convertImageToBase64Node(imageFilePath)
  .then(base64 => {
    console.log('Base64 рядок (JPEG або PNG):', base64);
    // Використовуйте цей base64 рядок у своєму JSON тілі запиту
  })
  .catch(error => {
    console.error(error);
  });