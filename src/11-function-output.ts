export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
  // Write the body of this function to concatenate three words together with space between them
const array = [firstWord, secondWord, thirdWord];
return array.join(" ")


}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result + " !"); // Expected output: "Hello from CODELEX"
