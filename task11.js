let fullName = 'Ulfat Zakirli Rovshen';


let nameArray = fullName.split('');

let nameParts = fullName.split(' ');
let modifiedFullName = nameParts[1] + ' ' + nameParts[0] + ' ' + nameParts[2];

let modifiedNameArray = modifiedFullName.split('');
let modifiedNameString = modifiedNameArray.join('');

console.log("1) Name Array:", nameArray);
console.log("2) Modified Full Name:", modifiedFullName);
console.log("3) Modified Name String:", modifiedNameString);
