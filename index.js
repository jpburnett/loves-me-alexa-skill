/* This code runs the simulation for the game of s/he loves me s/he loves me not where one would pluck
petals off a flower to determine if the the admirer of the user truly loves them. */

'use strict';

const Alexa = require('alexa-sdk'); //Require the Alexa skills developer kit
const languageStrings = require('./languageStrings').languageStrings;

const APP_ID = 'amzn1.ask.skill.eaa51f38-afbb-41ea-a0de-869a81ade996';  //ID for the application

//////////////////////////////////////////////////////////////////////////////
// Alexa intents
//////////////////////////////////////////////////////////////////////////////

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

	const alexa = Alexa.handler(event, context);

	// configure alexa
	alexa.appId = APP_ID;
	alexa.resources = languageStrings;

	// register alexa function handlers and away we go!
	alexa.registerHandlers(handlers);
	alexa.execute();
}

//////////////////////////////////////////////////////////////////////////////
// Intent implementation functions
//////////////////////////////////////////////////////////////////////////////
function closeWithSpeech(self) {
	self.emit(':tell', self.t('SHUTDOWN_MSG'));
}
