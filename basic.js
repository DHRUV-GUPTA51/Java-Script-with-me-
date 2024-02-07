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