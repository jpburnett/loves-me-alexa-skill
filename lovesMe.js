///////////////////////////////////////////////////////////////////
//Static Variables
//////////////////////////////////////////////////////////////////
var smFlower = Math.floor(Math.random() * 3) + 3; //make a small flower with petals from 3 to 5
var mdFlower = Math.floor(Math.random() * 3) + 5; //make a medium flower with petals from 5 to 7
var lgFlower = Math.floor(Math.random() * 3) + 7; //make a large flower with petals from 7 to 9

console.log(`Small Flower Size: %s`, smFlower);
console.log(`Medium Flower Size: %s`, mdFlower);
console.log(`Large Flower Size: %s \n`, lgFlower);

var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

var loveArray = []; //Array that will get filled with the phrases to speak

var phraseA = 'Loves Me'
var phraseB = 'Loves Me Not'

var size_of_flowers = ['Small', 'Medium', 'Large'];    

//////////////////////////////////////////////////////////////////////////////
// Intent implementation functions
//////////////////////////////////////////////////////////////////////////////

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
  return loveArray; //Return the filled array.
}

// TEST 2: Tests getting the final value which I will store in order for alexa to be able to
// definitively say the results
// console.log("STARTING TEST #2\n");

// var flwrSize = Math.floor(Math.random() * ((6 - 1)) + 1);
// console.log("The flower is size: " + flwrSize);

// var flower = makeFlower(flwrSize);
// var finalIndex = flwrSize - 1;  //Should be an Int
// var fullArray = flower.toString();
// var newArray = flower.join(', '); // Join adds a comma and space delimiter between each string, hopefully smoothing dialogue
// var finalStatement = flower[finalIndex];
// console.log(flower.length);
// console.log("Final Statement is " + finalStatement)
// console.log("The Final Index is: " + newArray[finalIndex]);
// console.log("The Full array is: " + fullArray);
// console.log("Hopefully Spaced Out Array: " + newArray);
// console.log("");
// if (flower[finalIndex] == "Loves Me") {
//   console.log("Congrats, the person, " + flower[finalIndex])
// } else {
//   console.log("Ooooh...sorry the person " + flower[finalIndex])
// }

// console.log("ENDING TEST #2\n\n");
// END TEST 2

// TEST 3
//Function for the men
// function heLoves(flowerSize){

//   //This will go through for all the even values to add the phrase 'Loves me'
//     while (lovesMeCounter < flowerSize) {
//       loveArray[lovesMeCounter] = phraseA;
//       lovesMeCounter += 2;
//     }

//   //This will go through for all the even values to add the phrase 'Loves me not'
//     while (LovesMeNotCounter < flowerSize) {
//       loveArray[LovesMeNotCounter] = phraseB;
//       LovesMeNotCounter += 2;
//     }
//     // var theLoveArray = loveArray.toString();  //Change the array of love to a single string
//     // const speechOutput = theLoveArray;  //Print the Array

//     return loveArray;  //Return the loveArray to parse through later.

// }
// console.log("STARTING TEST #3\n");

// var size = Math.floor(Math.random() * (6 - 1) + 1);
// console.log("The flower is size: " + size);

// var theLoveArray = heLoves(size);  //Make theLoveArray filled with strings
// var finalIndex = size - 1;  //Get the size of the flower and subtract one for size of theLoveArray
// var finalPhrase = theLoveArray[finalIndex]; //Get the last value of the index in theLoveArray

// theLoveArray = theLoveArray.join(', '); // Join adds a comma and space delimiter between each string, hopefully smoothing dialogue
// var newLoveArray = theLoveArray.toString();

// console.log("Final index " + finalIndex);
// console.log("The array is: " + newLoveArray);

// if (finalPhrase == "He Loves Me") {
//   console.log("Congrats, " + finalPhrase)
// } else {
//   console.log("Ooooh...sorry " + finalPhrase)
// }

// console.log("ENDING TEST #3\n");
//END

// Test #4 will be for figuring out how to implement the size feature.

var randomFlowerSize = size_of_flowers[Math.floor(Math.random() * size_of_flowers.length)];

//Test to see the randomness of the flower size
console.log(`The -RANDOM- flower size is: %s \n`, randomFlowerSize);

function heLoves(flowerSize){

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
    // var theLoveArray = loveArray.toString();  //Change the array of love to a single string
    // const speechOutput = theLoveArray;  //Print the Array

    return loveArray;  //Return the loveArray to parse through later.

}
console.log("READY?\n");
console.log("FIGHT!\n");

if (randomFlowerSize === "Large") {
  size = lgFlower;
} else if (randomFlowerSize === "Medium") {
  size = mdFlower;
} else if (randomFlowerSize === "Small") {
  size = smFlower;
} else {
  size = 1; //Don't really know what else to set it to...mainly for error checking I guess.
}

console.log("The flower is size: " + size);

var theLoveArray = heLoves(size);  //Make theLoveArray filled with strings
var finalIndex = size - 1;  //Get the size of the flower and subtract one for size of theLoveArray
var finalPhrase = theLoveArray[finalIndex]; //Get the last value of the index in theLoveArray

theLoveArray = theLoveArray.join(', '); // Join adds a comma and space delimiter between each string, hopefully smoothing dialogue
var newLoveArray = theLoveArray.toString();

console.log("Final index " + finalIndex);
console.log("The array is: " + newLoveArray);

if (finalPhrase == "Loves Me") {
  console.log("Congrats, " + finalPhrase)
} else {
  console.log("Ooooh...sorry " + finalPhrase)
}

console.log("ENDING TEST #4\n");
// End Test #4