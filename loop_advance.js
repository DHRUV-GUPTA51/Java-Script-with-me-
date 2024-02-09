//foreach does not return any values     
const numarray = [2, 3, 2, 32, 3, 2, 332, 23, 3, 23, 2, 3]
    // const newnums = []
    // numarray.forEach((val, index) => {
    //     if (val > 4) {
    //         newnums.push(val, index);
    //     }
    // })

// console.log(newnums);



const database = [{
        id: 1,
        name: 'John',
        age: 30,
        city: 'New York'
    },
    {
        id: 2,
        name: 'Alice',
        age: 25,
        city: 'Chicago'
    },
    {
        id: 3,
        name: 'Bob',
        age: 35,
        city: 'Chicago'
    },
    {
        id: 4,
        name: 'Emily',
        age: 28,
        city: 'San Francisco'
    },
    {
        id: 5,
        name: 'Michael',
        age: 32,
        city: 'Seattle'
    }
];
const newarr = [];
// database.forEach((val) => {
//     // if (val.city == 'Chicago' && val.id === 3) {
//     //     newarr.push(val)
//     // }
//     consolefilter("Chicago");
// })



let newa = database.filter((va) => va.city === 'Chicago')

console.log(newa);



// const newArr = numarray.filter((num) => num >= 4)
// console.log(newArr);



//use of maps in arrays

const numsarray = [2, 3, 2, 32, 3, 2, 332, 23, 3, 23, 2, 3]

// const qn = numsarray.map((num) => num + 10)
// console.log(qn);


//chianing can also be there 
const qn = numsarray.map((num) => num + 10).map((nums) => nums * 2).filter((nums) => nums > 20)
console.log(qn);

//reduce keyword
//used for adding total of cart in a shopping website 

const neew = [{
        id: 233,
        price: 2323
    },
    {
        id: 243,
        price: 23323
    },
    {
        id: 2334,
        price: 233323
    }
];

let f = neew.reduce((acc, num) => acc + num.price, 0)
console.log(f);