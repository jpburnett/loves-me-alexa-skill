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
    this.response.speak('WELCOME_MSG').listen("WELCOME_REPROMPT");
    this.emit(':responseReady')
  },

  //This intent should handle all the requests for guys, I tried picking a manly flower name...
  'carnationFlowerIntent' : function() {
    var self = this;
    /* var gender = this.event.request.intent.slots.maleGender.value;
    Future error checking I suppose
    if (true) {
      this.response.speak("Okay, here we go.");
    }
    else {
      this.response.speak("That isn't a male gender word, try again.");
    }
    */
    var speechOutput = heLoves();
    self.response.speak(speechOutput);
    self.emit(':responseReady');
  },

  'daisyFlowerIntent' : function() {
    var self = this;
    /* var gender = this.event.request.intent.slots.femaleGender.value;
    Future error checking I suppose
    if (true) {
      this.response.speak("Okay, here we go.");
    }
    else {
      this.response.speak("That isn't a female gender word, try again.");
    }
    */
    var speechOutput = sheLoves();
    self.response.speak(speechOutput);
    self.emit(':responseReady');
  },

  'AMAZON.FallbackIntent' : function(){
    this.response.speak("I don't quite know how to help with that in this skill. Try something else.")
    this.emit(':responseReady')
  },

  'AMAZON.CancelIntent': function () {
    this.response.speak(this.t('STOPING'));
    this.emit('SessionEndedRequest');
  },

  'AMAZON.CancelIntent' : function() {
    this.response.speak('SHUTDOWN_MSG');
    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent' : function() {
    const speechOutput = this.t('HELP_MSG');
    const reprompt = this.t('HELP_REPROMPT');
    this.response.speak(speechOutput).listen('HELP_REPROMPT');
    this.emit(':responseReady');
  }

  'AMAZON.StopIntent': function() {
    this.response.speak('Ok, let\'s play again soon.');
    this.emit(':responseReady');
  },

  'SessionEndedRequest': function () {
    this.response.speak(this.t('SHUTDOWN_MSG'));
    this.emit(':responseReady');
  },

  'Unhandled': function () {
    this.attributes.speechOutput = this.t('HELP_MESSAGE');
    this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
    this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
    this.emit(':responseReady');
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
}

//////////////////////////////////////////////////////////////////////////////
// Intent implementation functions
//////////////////////////////////////////////////////////////////////////////

function sheLoves(){
  // var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
  // var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
  // var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

  var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
  var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

  var loveArray = []; //Array that will get filled with the phrases to speak

  // this.response.listen('SIZE_PROMPT')  TODO:implementation will come later...

  var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1); //make a large flower with petals from 7 to 9

  var phraseA = 'She Loves Me'
  var phraseB = 'She Loves Me Not'

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
    const speechOutput = theLoveArray;  //Print the Array

    // self.response.speak(speechOutput);
	  // self.emit(':responseReady');
}

function heLoves(){
  // var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
  // var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
  // var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

  var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
  var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

  var loveArray = []; //Array that will get filled with the phrases to speak

  // this.response.listen('SIZE_PROMPT')  TODO:implementation will come later...

  var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1); //make a large flower with petals from 7 to 9

  var phraseA = 'He Loves Me'
  var phraseB = 'He Loves Me Not'

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
    const speechOutput = theLoveArray;  //Print the Array

    //self.response.speak(speechOutput);
	  //self.emit(':responseReady');
}

function closeWithSpeech(self) {
	self.emit(':tell', self.t('SHUTDOWN_MSG'));
}
