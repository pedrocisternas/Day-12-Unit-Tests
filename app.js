// console.log("Hello World");
const sum = (a,b) => {
    return a + b;
}
// console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
    return (dollar / 1.2) * 127.9;
}

const fromEuroToDollar = (euro) => {
    return euro * 1.2;
}

const fromYenToPound = (yen) => {
    return (yen / 127.9) * 0.8;
}
console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));




module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};