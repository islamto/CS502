const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];


console.log(arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Fuad") + 1));


const indexToChange = arr2.indexOf("Gulshen");
if (indexToChange !== -1) {
    arr2[indexToChange] = "Rovshen";
}


arr2.map(name => console.log(name));


const anarNames = arr2.filter(name => name === "Anar");
console.log(anarNames);


arr2.forEach((name, index) => {
    if (name === "Anar") {
        arr2[index] = "Perviz";
    }
});
console.log(arr2);

console.log(arr2[arr2.length - 2]);


console.log(arr2.length);