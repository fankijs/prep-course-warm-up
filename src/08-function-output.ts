export {};

function getNumber(): number {
  return Math.random() * 100;
}

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(Math.round(result)); // Expected output: {random number}
