var services = {
    haircut: "45.9 UAH",
    shave: "809 UAH",
    headWashing: "100 UAH",
};
console.log(services);

function price(services) {
    let totalPrice = 0;
    for (let key in services) {
        if (services.hasOwnProperty(key)) {
            let servicePrice = services[key].replace(' UAH', '');
            totalPrice += Number.parseFloat(servicePrice);
        }
    }
    return totalPrice;
};

console.log("Total price = ", price(services), "UAH");

function minPrice(services) {
    let min = Number.parseFloat(Object.values(services)[0].replace(' UAH', ''));
    for (let key in services) {
        if (services.hasOwnProperty(key)) {
            let servicePrice = Number.parseFloat(services[key].replace(' UAH', ''));
            if (servicePrice < min) {
                min = servicePrice;
            }
        }
    }
    return min;
};

console.log("Minimum price = ", minPrice(services), "UAH");

function maxPrice(services) {
    let max = Number.parseFloat(Object.values(services)[0].replace(' UAH', ''));
    for (let key in services) {
        if (services.hasOwnProperty(key)) {
            let servicePrice = Number.parseFloat(services[key].replace(' UAH', ''));
            if (servicePrice > max) {
                max = servicePrice;
            }
        }
    }
    return max;
};

console.log("Maximum price = ", maxPrice(services), "UAH");






























//check:
// function totalCount(services) {
//     let count = 0;
//     for (let key in services) {
//         if (services.hasOwnProperty(key)) {
//             count++
//         }
//     }
//     return count;
// }
// console.log("total amount of services = ", totalCount(services));

