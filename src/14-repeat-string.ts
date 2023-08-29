export {};

const repeatString = (letter: string, length: number) => {
    return letter.repeat(length);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
