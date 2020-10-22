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
# Python Libraries
# --------------------------------------------------------------------------
import logging
import gettext
import random

# --------------------------------------------------------------------------
# Resource Libraries
# --------------------------------------------------------------------------
from skill.resources import data, util

# Set Logging
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


class FlowerIntent(AbstractRequestHandler):
    """
    Handler for getting the recipe for an item

    Parameters:
    AbstractRequestHandler (obj): Amazon Request Handler object

    Returns: Amazon request with the item the user requested
    """

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return is_intent_name("RecipeIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        logger.info("In RecipeIntentHandler")

        _ = handler_input.attributes_manager.request_attributes["_"]

        # Get a random flower size between 3 and 10
        flowerSize = random.randint(3, 10)

        while flowerPetals > 0:
            if flowerSize % 1 == 0:
                print("Odd flower number")
            elif flowerSize % 2 == 1:
                print("Even flower number")
            else:
                print("flower is out of petals")

        return handler_input.response_builder.response
