let a = 5;

console.log(a);
console.log('namaste dunia version 32');
console.log(2 > 3);
console.log(3 == 3);

// == operator stands for loose equality 
// === opertor stands for strict EQUALITY 
//  conditional operator   === condition?val1 : val2


let age = 32;
let voting = (age > 18) ? console.log('i can vote') : console.log('i cannnot vote');


//IF ELSE CONDITIONS

let marks = 43;
if (marks > 98) {
    console.log('A');
} else if (marks > 88) {
    console.log('B');
} else if (marks > 78) {
    console.log('C');

} else {
    console.log('SIR AAP FAIL HOGYE HO');


}

//SWITCH CASES

let num = 2;
switch (num) {
    case 1:
        console.log('A');

        break;
    case 2:
        console.log('B');



}


//FOR LOOP 

for (let i = 0; i < 5; i = i + 1) {
    console.log(i + '  KRISHNA');
}



//CLASSES AND OBJECTS 


console.log('lets make ojects')
let rectangle = {

    length: 1,
    breadth: 1,

    draw: function() {

        console.log('rectangle');
    }

};

rectangle.draw();
console.log(rectangle.length);


//object and FactoRy function
function createRectangle() {
    return obj = {
        length: 1,
        breadth: 1,
        theta: 1,
        draw() {
            length: 1;
        }
    }
};
let functionstore = createRectangle();
console.log(functionstore);


//passing using functions

function createCircle(radiusss, ) {
    const pi = 3.14;
    return {
        radius: radiusss,
        parimeter() {
            console.log(2 * pi * radiusss);
        }
    };

}
let variablex = createCircle(5);
variablex.parimeter();


//CONSTRUCTOR THIS > KEY WORD WHICH SHOWS WHICH OBJECTT IS BEINg CALLED 
//in constructor we initialize all the vlaues through this 
//NEW keyword gives us empty objects 
///nayi object create krne ke lie hm new keywod ka use krte hai
//creaton using constructor
function rectn(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.recarea = function() {
        console.log(len * bre);
    }
};
let vari = new rectn(5, 4);
// let areaaof = mew recarea;

//functions are also ojects in js 
//functions are also constructor in js 



//NEXT TOPIC 

// primitive are copied by their values.. 
// refrences are copied by their addresses..

// example of primitive 


let aa = 10;
let b = aa;
aa++;
console.log(aa);
console.log(b);


//example of refrences

let aaa = { value: 10 };

let bb = aaa;
aaa.value++;
console.log(aaa.value);
console.log(bb.value);