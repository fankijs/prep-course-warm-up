export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

function stringToArray(listOfNames: string[]) {
    let result: string[] = [];
    for (let i = 0; i < listOfNames.length; i++) {
        console.log("outer for loop: ", listOfNames[i].split(" "));
        const nameSurnameArray = listOfNames[i].split(" ");
        for (let j = 0; j < nameSurnameArray.length; j++) {
            console.log("inner for loop: ", nameSurnameArray[j]);
            result.push(nameSurnameArray[j]);
        
        }
    }
    return result
    }
        

console.log(stringToArray(["John Doe", "Antons Pontons"])); // Expected output: ['John', 'Doe', 'Antons', 'Pontons']
