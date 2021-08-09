import { Method, ResponseType } from "axios";
import { Language } from "../types/common/Language";

export const POST: Method = "POST";
export const GET: Method = "GET";
export const DELETE: Method = "DELETE";
export const PUT: Method = "PUT";

export const HOSTNAME = "http://212.98.167.242/";
export const PORT = 13312;

export const PATH_METHOD_AUTHENTICATE = "/api/login";
export const PATH_HEALTH_CHECK = "/health/check";

export const PATH_METHOD_CUSTOMERS_LOAD = "/customer/load/";
export const PATH_METHOD_CUSTOMER_LOAD = "/customer/load/";

export const PATH_METHOD_FILE_UPLOAD = "/file/upload/";
export const PATH_METHOD_FILE_LOAD = "/file/load/";
export const PATH_METHOD_FILE_REMOVE = "/file/remove/";
export const PATH_METHOD_GENERATE_REPORT = "/document/generate";
export const PATH_METHOD_EXPORT_REPORT_TO_M_FILES = "/m-files/export";

export const PATH_METHOD_VALIDATE = "/validation/validate";

export const PATH_METHOD_FETCH_FEATURES_FOR_ROLES = "/common/role/feature/load";

export const THOUSAND_SEPARATOR = "'";

export const PATH_METHOD_SETTINGS_LOAD = "/setting/load";
export const PATH_METHOD_SETTING_CREATE_NEW = "/setting/new";
export const PATH_METHOD_SETTING_REMOVE = "/setting/remove/";
export const PATH_METHOD_SETTING_MODIFY = "/setting/modify/";

export const PATH_METHOD_LANGUAGES_LOAD_ALL = "/common/language/load";

export const HTTPS = "HTTP://";
export const WS = "/ws";
export const DELIMITER = ":";
export const DOUBLE_SLASH = "//";
export const SLASH = "/";
export const SECURITY_TOPIC = "/token-expire/";
export const WS_EVENT_TOKEN_EXPIRE = "TOKEN_EXPIRE";
export const WS_MESSAGE_EXPIRE_MESSAGE = "Your session has been ended. Please, login again.";
export const DEVELOPMENT = "development";
export const IDENTITY = "identity";

export const ERROR = "error";

export const APPLICATION_JSON = "application/json";
export const JSON_TYPE: ResponseType = "json";
export const TEXT = "text";
export const BEARER = "Bearer ";

export const ENCODING_UTF8 = "utf8";
export const SECONDS_IN_MINUTE = 60;
export const SECONDS_IN_WEEK = 6048e5;
export const MILLISECONDS_IN_SECOND = 1000;

export const TIME_OF_LOG_IN_POP_UP = 3500;
export const TIME_OF_CALCULATING_ERROR_MESSAGE_POP_UP = 3500;

export const KEYBOARD_ENTER_CODE = 13;
export const KEYBOARD_TAB_CODE = 9;

export const UTC_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const UTC_FORMAT_CUSTOM_1 = "YYYY-MM-DD HH:mm";

export const JWT_TOKEN = "jwtToken";
export const ROLES = "roles";
export const USERNAME = "username";
export const FEATURES = "features";
export const SETUP_TIME = "setupTime";
export const LANGUAGE_DEFAULT = Language.EN;
export const EN = "en";
export const DE = "de";
export const FR = "fr";
export const I18 = "i18";

export const AS = "/as/";

export const SEPARATORS = {
    COMMA: ", ",
};

export const RENDER_DELAY = 300;
export const BLUR_DELAY = 3000;
export const SUCCESS_MESSAGE_DELAY = 2500;
export const SELECTION_DELAY = 10;

export const DEFAULT_TIMEOUT = 500;

export const MIN_DURATION = 1;
export const MAX_DURATION = 60;
