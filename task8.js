const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];


const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);


const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Odd numbers:", oddNumbers);