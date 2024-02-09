// // console.log("krishna krishna");


// // let lastname = 'guptaaa'

// // let firstname = new String('dhruv')

// // let message = `you are very beautiful....

// // my first message which i have  written to you was above 

// // regards DHRUV
// // `


// // console.log(message);


// // //DATE AND TIME

// // let date = new Date();
// // console.log(date);


// // this keyword

// let user = {
//     username: 'DHRUv',
//     id: 4154,
//     useofthis: function() {
//         console.log(`${this.username},WELCOME TO THE WEBSITE`)
//         console.log(this)
//     }
// };
// // let store = user
// // console.log(store);
// // let username = 'harish'
// // console.log(this)
// // console.log(store)

// // this talks about current context and current object

// user.useofthis()
// user.username;
// user.username = 'harish'
// user.useofthis()
// console.log(this)



// //arrow function how to use 
// let chai = (num1, num2) => {
//     return num1 + num2;

// }
// console.log(chai(23, 32))

// // another way of using 
// let chaii = (num1, num2) => num1 * num2
// console.log(chaii(34, 3))

// //returning a object
// let obj = () => ({ username: "dhurv", id: 343 })
// obj.username = "harish"
// console.log(obj)


// // IIFE
// // imidietley invoked function execution

// // function dd() {
// //     console.log('hare krishna');
// // }
// // dd()

// // after usuing iife

// // (function dsd() {
// //     console.log('hare krishna');
// // })();

// //maps in js 

// const m = new Map();
// m.set('IN', 'INDssIA')
// m.set('IN', 'INDIA')
// m.set('IN', 'INDiIA')
// m.set('fr', 'fran2ce')
//     // console.log(m);

// for (const key of m) {
//     console.log(key);
// }

// for (const [key, value] of m) {
//     console.log(key);
// }


// // loops for objects
// const objjj = {
//     jh: 'jcc',
//     jhd: 'jcce',
//     jhdd: 'jcc',
// }

// // console.log(objjj.jh)
// for (const key in objjj) {
//     console.log(key);

// }
// //accessing the array through differnt processes

// const arr = ['dhruv', 'ere', 'erer']

// arr.forEach((val, index, array) => {
//     console.log(val, index, array)

// })

//objects un the array 
const coding = [{
        languauge: 'javasript',
        compiler: 'vs code'
    }, {
        languauge: 'c++',
        compiler: 'vs code'

    }, {
        languauge: 'ruby',
        compiler: 'vs code'

    }

]
coding.forEach((items) => {
    console.log(items.languauge);
})