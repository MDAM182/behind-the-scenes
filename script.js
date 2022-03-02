'use strict';
// Scoping in practice

//calc age is a global function
function calcAge(birthYear) {
  const age = 2022 - birthYear; // local scope for calcAge function

  function printAge() {
    // printAge is a local function to parent calcAge
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // anything withing if block cannot be called outside block unless it is var
      var millenial = true;

      //Creating New variable with same name as outer scope's variable
      const firstName = 'Don';
      //Reassihning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // var variables are functon scoped so it can be acessed outside if block but only with in printAge
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = 'Mike';
calcAge(1992);
