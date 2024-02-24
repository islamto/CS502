const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];


const sum = arr1.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers in 'arr1':", sum);


arr1.push(10, 88);
console.log("Array after adding (10, 88) to the end:", arr1);


arr1.splice(0, 2);
console.log("Array after removing first two numbers:", arr1);


arr1.unshift(0, 9, 11);
console.log("Array after adding (0, 9, 11) in front:", arr1);


arr1.splice(0, 4);
console.log("Array after removing first four numbers:", arr1);
