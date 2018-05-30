/* This code runs the simulation for the game of s/he loves me s/he loves me not where one would pluck
petals off a flower to determine if the the admirer of the user truly loves them. */

'use strict';

// Include the Alexa SDK
const Alexa = require('alexa-sdk');
const languageStrings = require('./languageStrings').languageStrings;

const APP_ID = 'amzn1.ask.skill.eaa51f38-afbb-41ea-a0de-869a81ade996';  //ID for the application

//////////////////////////////////////////////////////////////////////////////
// Alexa intents
//////////////////////////////////////////////////////////////////////////////

// The handlers object tells Alexa how to handle various actions
const handlers = {

  //LaunchRequest is what will run first when the skill is invoked
  'LaunchRequest' : function() {
    //The phrase that Alexa will say upon starting the skill
    const speechOutput = this.t('WELCOME_MSG', this.t('SKILL_NAME') );
    //If the user doesn't respond in time, it will reprompt
    const reprompt = this.t('WELCOME_REPROMPT');

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'newFlowerIntent' :function() {
    var self = this;

  },

  'AMAZON.CancelIntent' : function() {
    var self = this;
    closeWithSpeech(self);
  },

  'AMAZON.StopIntent' : function() {
    var self = this;
    closeWithSpeech(self);
  },

}

//////////////////////////////////////////////////////////////////////////////
// Initialize Alexa and connect the application
//////////////////////////////////////////////////////////////////////////////
exports.handler = function(event, context) {

// Set up the Alexa object
	const alexa = Alexa.handler(event, context);

	// configure alexa
	alexa.appId = APP_ID;
	alexa.resources = languageStrings;

	// register alexa function handlers and away we go!
	alexa.registerHandlers(handlers);
  // Start the Alexa code
	alexa.execute();
},

//This intent should handle all the requests for guys, I tried picking a manly flower name...
'carnationFlowerIntent' : function() {
  var gender = this.event.request.intent.slots.maleGender.value;
  /* Future error checking I suppose
  if (true) {
    this.response.speak("Okay, here we go.");
  }
  else {
    this.response.speak("That isn't a male gender word, try again.");
  }
  */
  var speechOutput = heLoves;
  this.response.speak(speechOutput);
  this.emit(':responseReady');
},

'daisyFlowerIntent' : function() {
  var gender = this.event.request.intent.slots.femaleGender.value;
  /* Future error checking I suppose
  if (true) {
    this.response.speak("Okay, here we go.");
  }
  else {
    this.response.speak("That isn't a female gender word, try again.");
  }
  */
  var speechOutput = sheLoves;
  this.response.speak(speechOutput);
  this.emit(':responseReady');
},
'AMAZON.CancelIntent': function () {
    this.response.speak(this.t('STOPING'));
    this.emit('SessionEndedRequest');
},
'SessionEndedRequest': function () {
    this.response.speak(this.t('STOP_MESSAGE'));
    this.emit(':responseReady');
},
'Unhandled': function () {
    this.attributes.speechOutput = this.t('HELP_MESSAGE');
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
    this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
},

//////////////////////////////////////////////////////////////////////////////
// Intent implementation functions
//////////////////////////////////////////////////////////////////////////////

function sheLoves(self){
  var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
  var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
  var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

  var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
  var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

  var loveArray = []; //Array that will get filled with the phrases to speak

  // this.response.listen('SIZE_PROMPT') // TODO: implementation will come later

  var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1); //make a large flower with petals from 7 to 9

  var phraseA = 'She Loves Me'
  var phraseB = 'She Loves Me Not'
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
    var theLoveArray = loveArray.toString();  //Change the array of love to a single string
    return theLoveArray; //Return the array filled with love...or not.
  }

  self.response.speak(theLoveArray);  //Alexa will speak back the phrase.
}

function heLoves(self){
  var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
  var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
  var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

  var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
  var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

  var loveArray = []; //Array that will get filled with the phrases to speak

  // this.response.listen('SIZE_PROMPT')  TODO:implementation will come later...

  var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1); //make a large flower with petals from 7 to 9

  var phraseA = 'He Loves Me'
  var phraseB = 'He Loves Me Not'
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
    var theLoveArray = loveArray.toString();  //Change the array of love to a single string
    return theLoveArray; //Return the array filled with love...or not.
  }

  self.response.speak(theLoveArray);  //Alexa will speak back the phrase.
}

function closeWithSpeech(self) {
	self.emit(':tell', self.t('SHUTDOWN_MSG'));
}
