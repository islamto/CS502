let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

//Aşağıdakı hər bir taskı function icərisində yazın.
//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
console.log(startingWithT(arr2));
function startingWithT(arr) {
    let res= []
    arr.map(item => {
        if (item.name[0] === 't') {
            res.push(item)
        }
    })
    return res;
}

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
console.log(startingAndEndingWithT(arr2));
function startingAndEndingWithT(arr) {
    let res= []
    arr.map(item => {
        if (item.name[0] === 't' && item.name[item.name.length - 1] === 't') {
            res.push(item)
        }
    })
    return res;
}
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
console.log(keysDigit(arr2));
function keysDigit(arr) {
    let res = 0; 
    arr.map(item => {
        if (item.name[0] === 't' && item.name[item.name.length - 1] === 't') {
            res += item.key;
        }
    })
    return res;
}
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
console.log(changeNameToSuperDev(arr2));
function changeNameToSuperDev(arr) {
    arr.map(item => {
        if (item.name[item.name.length - 1] === 'e') {
            item.name = "SuperDev"
        }
    })
}
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
console.log(maxLengthNameKey(arr2));
function maxLengthNameKey(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max.name.length < arr[i].name.length) {
            max = arr[i];
        }
    }
    return max.key;
}
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
console.log(maxLengthNameIndex(arr2));
function maxLengthNameIndex(arr) {
    let max = arr[0];
    let maxIndex= 0;
    arr.forEach((element, index) => {
        if (max.name.length < element.name.length) {
            max = element;
            maxIndex = index;
        }
        
    });
    return maxIndex;
}
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
console.log(new4LengthItemsArr(arr2));
function new4LengthItemsArr(arr) {
    let newArr = [];
    arr.map(item => {
        if (item.name.length === 4) {
            newArr.push(item)
        }
    });
    return newArr;
}
/* //OR THIS
function new4LengthItemsArr(arr) {
    return arr.filter(item => item.name.length === 4)
} */

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
console.log(maxKeyObjName(arr2));
function maxKeyObjName(arr) {
    let max = arr[0]
    arr.map(item => {
        if (item.key > max.key) {
            max = item;
        }
    })
    return max.name
}

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
console.log(find2LsNameİndexs(arr2));
function find2LsNameİndexs(arr) {
    let res = []
    arr.map(item => {
        if (item.name.split('').filter(s => s.toLowerCase() === "l").length === 2) {
            res.push(item.key)
        }
    })
    return res;
}

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
console.log(find2TsNameİndexs(arr2));
function find2TsNameİndexs(arr) {
    let res = []
    arr.map(item => {
        if (item.name.split('').filter(s => s.toLowerCase() === "t").length === 2) {
            res.push(item.key)
        }
    })
    return res;
}