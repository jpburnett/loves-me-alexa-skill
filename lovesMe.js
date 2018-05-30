///////////////////////////////////////////////////////////////////
//Static Variables
//////////////////////////////////////////////////////////////////
var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

var loveArray = []; //Array that will get filled with the phrases to speak

var phraseA = 'Loves Me'
var phraseB = 'Loves Me Not'

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

//Function that will make and fill the array depending on the flower size
function makeFlower(flowerSize){
//This will go through for all the even values to add the phrase 'Loves me'
  while (lovesMeCounter < flowerSize) {
    loveArray[lovesMeCounter] = phraseA;
    lovesMeCounter += 2;
  }

//This will go through for all the even values to add the phrase 'Loves me not'
  while (LovesMeNotCounter < flowerSize) {
    loveArray[LovesMeNotCounter] = phraseB;
    LovesMeNotCounter += 2;
  }
  var theLoveArray = loveArray.toString();
  return theLoveArray; //Return the filled array.
}

//Small flower test
console.log("Running Tests on small flower...", '\n')
console.log("The size of the small flower is:", smFlower);
makeFlower(smFlower);
console.log("The first value of the array is: " + loveArray[0]);
console.log("Size of the array:", loveArray.length);
console.log("The full array is:", loveArray.toString(), '\n')

//Medium Flower test
console.log("Running Tests on medium flower...", '\n')
console.log("The Size of the medium flower is:", mdFlower);
makeFlower(mdFlower);
console.log("The first value of the array is: " + loveArray[0]);
console.log("Size of the array:", loveArray.length);
console.log("The full array is:", loveArray.toString(), '\n')

//Large Flower Test
console.log("Running Tests on large flower...", '\n')
console.log("The Size of the large flower is:", lgFlower);
makeFlower(lgFlower);
console.log("The first value of the array is: " + loveArray[0]);
console.log("Size of the array:", loveArray.length);
console.log("The full array is:", loveArray.toString(), '\n')

var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1);
console.log(flowerSize);
