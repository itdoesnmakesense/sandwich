// Create a variable that holds your name
var myName = "Juan";

// Create an object that holds your personal information
var myInfo = {
  age: 27,
  astro_sign: "Aquarius",
  marital_status: "partnered",
  spouse: "Brandon"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};
var BackToBlack = {
  name: "Back to Black",
  artist: "Amy Winehouse",
  year: 2006,
  sales: 20000000,
  number_of_hits: 5
};
var BrokeWithExpenisveTaste = {
  name: "Broke With Expensive Taste",
  artist: "Azealia Banks",
  year: 2014,
  sales: 11000,
  number_of_hits: 4
};

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
recordArray.push(BackToBlack, BrokeWithExpenisveTaste);


/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var newRating = function (album, newRating) {
  // Add the rating to the album
    album.rating = newRating;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (albumList) {
  for (var i = 0; i < albumList.length; i++) {
    newRating(albumList[i], 7);
  }
};

// Call the function that starts modifying the array
modifyAlbums(recordArray);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
