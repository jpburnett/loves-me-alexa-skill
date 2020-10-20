#--------------------------------------------------------------------------
# AwS Libraries
#--------------------------------------------------------------------------
from ask_sdk_core.skill_builder import SkillBuilder
from ask_sdk_core.handler_input import HandlerInput
from ask_sdk_core.dispatch_components import (
    AbstractRequestHandler, AbstractExceptionHandler,
    AbstractResponseInterceptor, AbstractRequestInterceptor)
from ask_sdk_core.utils import is_request_type, is_intent_name
from ask_sdk_model.ui import SimpleCard
from ask_sdk_model import Response

#--------------------------------------------------------------------------
# Python Libraries
#--------------------------------------------------------------------------
import logging
import gettext

#--------------------------------------------------------------------------
# Resource Libraries
#--------------------------------------------------------------------------
from skill.resources import data, util

# Set Logging 
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

