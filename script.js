'use strict';
// Scoping in practice

// //calc age is a global function
// function calcAge(birthYear) {
//   const age = 2022 - birthYear; // local scope for calcAge function

//   function printAge() {
//     // printAge is a local function to parent calcAge
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // anything withing if block cannot be called outside block unless it is var
//       var millenial = true;

//       //Creating New variable with same name as outer scope's variable
//       const firstName = 'Don';
//       //Reassihning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial); // var variables are functon scoped so it can be acessed outside if block but only with in printAge
//     // console.log(add(2, 3));
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Mike';
// calcAge(1992);

//Hoisting with Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Mike';
// let job = 'Teacher';
// const year = 1992;

// //Hoisting with functions

// console.log(addDecl(5, 5));
// // console.log(addExpr());
// // console.log(addArror());

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArror = (a, b) => a + b;

// const mick = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// mick.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = mick.calcAge;
// matilda.calcAge();

const mick = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

mick.greet;
