'use strict';

// Import the standard SDK module 
const Alexa = require('alexa-sdk');

const https = require("https");
// Imports the file with all the messages
const languageStrings = require('./lambda/custom/languageStrings').languageStrings;

//////////////////////////////////////////////////////////////////////////////
// Handlers
//////////////////////////////////////////////////////////////////////////////

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        const speakOutput = requestAttributes.t('WELCOME_MSG', requestAttributes.t('SKILL_NAME'));
        const repromptOutput = requestAttributes.t('WELCOME_REPROMPT');

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    },
};



// Help the User make informed decisions of how to use the skill
const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const requestAttributes = attributesManager.getRequestAttributes();
        return responseBuilder
            .speak(requestAttributes.t('HELP_MSG'))
            .reprompt(requestAttributes.t('HELP_MSG'))
            .getResponse();
    },
};

// When the User says stop, quit or cancel (No means no, Alexa!)
const StopHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.NoIntent'
                || request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const requestAttributes = attributesManager.getRequestAttributes();
        return responseBuilder.speak(requestAttributes.t('STOP_MSG')).getResponse();
    },
};


const FallbackHandler = {
    // 2018-May-01: AMAZON.FallackIntent is only currently available in en-US locale.
    // This handler will not be triggered except in that locale, so it can be
    // safely deployed for any locale.
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(FALLBACK_MESSAGE)
            .reprompt(FALLBACK_REPROMPT)
            .getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.')
            .reprompt('Sorry, an error occurred.')
            .getResponse();
    },
};

// Handler for when the user closes the skill
const SessionEndedHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};

//////////////////////////////////////////////////////////////////////////////
// Constants and Other Data, Vars, etc...
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Helper Functions
//////////////////////////////////////////////////////////////////////////////
//Function for the ladies
function sheLoves(flowerSize) {
    // var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
    // var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
    // var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

    var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
    var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

    var loveArray = []; //Array that will get filled with the phrases to speak

    // this.response.listen('SIZE_PROMPT')  TODO:implementation will come later...

    //Don't use this here, I will just pass it in to the function
    // var flowerSize = Math.floor(Math.random() * ((9 - 1) + 1) + 1); //make a large flower with petals from 7 to 9

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
    // var theLoveArray = loveArray.toString();  //Change the array of love to a single string
    // const speechOutput = theLoveArray;  //Print the Array

    return loveArray;  //Return the loveArray to parse through later.
}

//Function for the fellas
function heLoves(flowerSize) {
    // var smFlower = Math.floor(Math.random() * ((5 - 3 ) + 1) + 3); //make a small flower with petals from 3 to 5
    // var mdFlower = Math.floor(Math.random() * ((7 - 5) + 1) + 5); //make a medium flower with petals from 5 to 7
    // var lgFlower = Math.floor(Math.random() * ((9 - 7) + 1) + 7); //make a large flower with petals from 7 to 9

    var lovesMeCounter = 0; //counter to determine how many times to print the phrase "Loves Me" starts at 0
    var LovesMeNotCounter = 1;  //counter to determine how many times to print the phrase "Loves Me Not" starts at 1

    var loveArray = []; //Array that will get filled with the phrases to speak

    // this.response.listen('SIZE_PROMPT')  TODO:implementation will come later...

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
    // var theLoveArray = loveArray.toString();  //Change the array of love to a single string
    // const speechOutput = theLoveArray;  //Print the Array

    return loveArray;  //Return the loveArray to parse through later.
}

//////////////////////////////////////////////////////////////////////////////
// Export LAMBDA SETUP
//////////////////////////////////////////////////////////////////////////////

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpHandler,
        StopHandler,
        FallbackHandler,
        ErrorHandler,
        SessionEndedRequestHandler
    )
    .addRequestInterceptors(LocalizationInterceptor)
    .addErrorHandlers(ErrorHandler)
    .lambda();