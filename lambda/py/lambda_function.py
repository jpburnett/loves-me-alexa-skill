"""
lambda_function deals with the launch handler and the skill building.
"""
# --------------------------------------------------------------------------
# Python Libraries
# --------------------------------------------------------------------------
import logging
import gettext

# --------------------------------------------------------------------------
# AwS Libraries
# --------------------------------------------------------------------------
from ask_sdk_core.skill_builder import SkillBuilder
from ask_sdk_core.handler_input import HandlerInput
from ask_sdk_core.dispatch_components import (
    AbstractRequestHandler, AbstractExceptionHandler,
    AbstractResponseInterceptor, AbstractRequestInterceptor)
from ask_sdk_core.utils import is_request_type, is_intent_name
from ask_sdk_model.ui import SimpleCard
from ask_sdk_model import Response

# --------------------------------------------------------------------------
# Resource Libraries
# --------------------------------------------------------------------------
from skill.resources import data
from skill.intents.built_in_intenets import HelpIntentHandler, CancelOrStopIntentHandler, RepeatIntentHandler, \
    FallbackIntentHandler, SessionEndedRequestHandler, YesIntentHandler, NoIntentHandler, \
    CatchAllExceptionHandler, CacheSpeechForRepeatInterceptor, LocalizationInterceptor

# Set Logging
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# --------------------------------------------------------------------------
# Handlers
# --------------------------------------------------------------------------


class LaunchRequestHandler(AbstractRequestHandler):
    """
    Handler for skill launch.
    Parameters:
    AbstractRequestHandler (obj): Amazon Request Handler object
    Returns: Amazon response object
    """

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_request_type("LaunchRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        logger.info("In LaunchRequestHandler")
        _ = handler_input.attributes_manager.request_attributes["_"]

        # Get Session attributes
        session_attr = handler_input.attributes_manager.session_attributes
        session_attr["PREV_INTENT"] = "LaunchRequest"

        speech = _(data.WELCOME_MSG).format(_(data.SKILL_NAME))

        reprompt = _(data.WELCOME_REPROMPT)

        handler_input.response_builder.speak(speech).set_card(
            SimpleCard(data.SKILL_NAME, "Loves Me")
        ).ask(reprompt)

        return handler_input.response_builder.response


sb = SkillBuilder()

# Main intents
sb.add_request_handler(LaunchRequestHandler())

sb.add_request_handler(HelpIntentHandler())
sb.add_request_handler(RepeatIntentHandler())
sb.add_request_handler(CancelOrStopIntentHandler())
sb.add_request_handler(FallbackIntentHandler())
sb.add_request_handler(SessionEndedRequestHandler())
sb.add_request_handler(YesIntentHandler())
sb.add_request_handler(NoIntentHandler())

# Exceptions
sb.add_exception_handler(CatchAllExceptionHandler())

# Interceptors
sb.add_global_request_interceptor(LocalizationInterceptor())
sb.add_global_response_interceptor(CacheSpeechForRepeatInterceptor())

lambda_handler = sb.lambda_handler()
