/*
  ...........YOUR MISSION...........

  Make me a sandwich.
    1. Create a Sandwich object.
  Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
 
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

 var sandwich = {
  pickles:false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false 
};


/* Declare the function 'mySandwich' */
       function pickles() {
         console.log("I have pickles in my sandwich");
         };
        function lettuce() {
         console.log("I have lettuce in my sandwich");
        };
        function tomato() {
          console.log("I have tomatoes in my sandwich");
        };
        function ketchup() {
          console.log("I have ketchup in my sandwich");
        };
        function mustard() {
          console.log("I have mustard in my sandwich");
        };
        function mayo() {
          console.log("I have mayo in my sandwich");
        };

function makeMeASandwich (a, b, c, d, e, f){
  if (a === true) {
    pickles();
  };
    if (b === true) {
    lettuce();
  };
    if (c === true) {
    tomato();
  };
    if (d === true) {
    ketchup();
  };
    if (e === true) {
    mustard();
  };
    if (f === true) {
    mayo();
  };
 }

document.write(makeMeASandwich(true,false, true, true, false))