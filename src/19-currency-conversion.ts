export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

const CONVERSION_RATE_USD = 1.09; //EUR TO USD
const CONVERSION_RATE_BRL = 5.45; //EUR TO BRL
const CONVERSION_RATE_GBP = 0.86; //EUR TO GBP
const tax = 0.01;

// You are allowed to change this function
function convertToUSD(price: number) {
    return (((price * CONVERSION_RATE_USD) * tax) + (price * CONVERSION_RATE_USD)).toFixed(2);
}
// You are allowed to change this function
function convertToBRL(price: number) {
    return (((price * CONVERSION_RATE_BRL) * tax) + (price * CONVERSION_RATE_BRL)).toFixed(2);
}

function convertToGBP(price: number) {
    return (((price * CONVERSION_RATE_GBP) * tax) + (price * CONVERSION_RATE_GBP)).toFixed(2);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);
const priceInGBP = convertToGBP(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);
console.log("Price: £" + priceInGBP);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?
    > Price: £?  
*/
