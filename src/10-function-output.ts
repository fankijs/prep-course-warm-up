export {};

function s(w1:string, space: string, w2: string) {
  return w1 + space + w2;
}

const result = s ("hello", " ", "world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
