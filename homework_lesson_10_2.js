var arrWords = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple", "Puddle", "testAa"]
var regex = /^[^aA]{6,}$/;
function checkWords(word) {
    return regex.test(word);
}
var filter = arrWords.filter(checkWords)
console.log(filter);