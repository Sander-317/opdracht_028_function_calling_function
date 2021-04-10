
const minAge = 18;

const ageChecker = function (number) {
    if (number >= minAge) {
        return "true";
    }
    return;

};

const check = function (age) {
    const checkedAge = ageChecker(age);
    if (checkedAge == "true") {
        return "hello there";
    }
    return "hey kiddo";

};

console.log(check(15))
console.log(check(18))
console.log(check(10))
console.log(check(22))

const btw = 1.21;

const addVat = function (price) {
    const vatPrice = price * btw;
    return vatPrice;
};

console.log(addVat(100));

const priceTotal = function (price) {
    const totalPrice = addVat(price);
    return totalPrice;
};


console.log(priceTotal(1000));
console.log(priceTotal(569));
console.log(priceTotal(150));
console.log(priceTotal(33));




const basePriceF = function (priceIcludedVat, vat) {
    const priceIcludedVat2 = priceIcludedVat * 100;
    const vat2 = vat + 100;
    const basePrice = priceIcludedVat2 / vat2;
    return [basePrice, vat];
};

console.log(basePriceF(140, 40));

const vatCalculator = function (priceIcludedVat, vat) {
    const basePrice = basePriceF(priceIcludedVat, vat)
    return " base price = " + Math.round(basePrice[0]) + " the vat = " + basePrice[1] + " unround " + basePrice;
};

Math.round()

console.log(vatCalculator(121, 21));
console.log(vatCalculator(12100, 80));
console.log(vatCalculator(3691, 18));
console.log(vatCalculator(98521, 2));
console.log(vatCalculator(158624, 99));

