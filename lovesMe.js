///////////////////////////////////////////////////////////////////
//Static Variables
//////////////////////////////////////////////////////////////////
var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

var lovesMeCounter; //counter to determine how many times to print the phrase "Loves Me"
var LovesMeNotCounter;  //counter to determine how many times to print the phrase "Loves Me Not"

var loveArray = []; //Array that will get filled with the phrases to speak
// loveArray[0] = phraseA; //Init the array with loves me at the first position

var phraseA = "Loves Me"
var phraseB = "Loves Me Not"

console.log("The Size of the Flower is:", smFlower);

//////////////////////////////////////////////////////////////////////////////
// Intent implementation functions
//////////////////////////////////////////////////////////////////////////////

//Function to determine if the flower number is even or odd
function isEven(number) {
  if (number % 2 == 0) {
    return true;  //Number is even
  }
  else {
    return false; //Number is not even
  }
}

//Function to fill the Love Array with the 'Loves Me' phrase
// function fillWithLove(flowerSize) {
//   for (var i = 0; i < flowerSize; i++ ) {
//     loveArray.push(phraseA);
//   }
//   return loveArray;
// }

// loveArray[0] = phraseA;


//This will go through for all the even values to add the phrase 'loves me'
var counter = 0;
while (counter < smFlower) {
  loveArray[counter] = phraseA;
  counter += 2;
}

console.log("The first value of the array is: " + loveArray[0], '\n');
console.log(loveArray.toString());

//While loop to put in the phrase 'Loves me not'
var counterB = 1;
while (counterB < smFlower) {
  loveArray[counterB] = phraseB;
  counterB += 2;
}

// fillWithLove(smFlower);
console.log("The full array is:")
console.log(loveArray.toString());
console.log("Size of the array:", loveArray.length);
