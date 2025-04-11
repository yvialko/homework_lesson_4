function checkProbabilityTheory(count) {
    let countOdd = 0;
    let countEven = 0;
    for (let i = 0; i < count; i++){
        let numbs = Math.floor((Math.random() * 900) + 100);
       //console.log(numbs);      
        if (numbs % 2 === 0) {
            countEven++         
        } else {
            countOdd++        
        }
    }
    console.log("totalCount:", count);
    console.log("totalCountOfOdd:", countOdd);
    console.log("totalCountOfEven:", countEven);
    let percentageOdd = Math.round((countOdd / count) * 100);
    let percentageEven = Math.round((countEven / count) * 100);
    console.log("Відношення парних до загальної кількості: " + percentageEven + "%");
    console.log("Відношення непарних до загальної кількості: " + percentageOdd + "%");
    console.log(percentageOdd + "%",  ':', percentageEven + "%",);
}
checkProbabilityTheory(5);