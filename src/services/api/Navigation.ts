export const ADD = "/new";
export const DELETE = "/remove";
export const RESTORE = "/restore";
export const MODIFY = "/modify";
export const LOAD = "/load";
export const COPY = "/copy";
/*--------------------------------------------------------------------*/
export const TEMPLATE = "/template";
export const CONTRACT = "/contract";
export const GENERATE = "/generate";
export const APPROVE = "/approve";
export const DETAILS = "/details";
export const OVERVIEW = "/overview";
export const CURRENTLY_PUBLISHED = "/currently-published";
export const PUBLISH = "/publish";
export const UNPUBLISH = "/unpublish";
export const EXECUTE = "/execute";
export const ALL = "/all";
export const PREFILL = "/prefill";
export const SEARCH = "/search";
export const RESET = "/reset";
export const HANDLE = "/handle";
export const PREPARE = "/prepare";
export const PERSONAL = "/personal";
export const CALCULATE = "/calculate";
export const EXPORT = "/export";

/*--------------------------------------------------------------------*/

export const COMMON = "/common";
export const STATUS = "/status";
export const USER = "/user";
export const PASSWORD = "/password";
export const PRODUCT_GROUP = "/product-group";
export const AVAILABLE = "/available";
const ORDER = "/order";
const OFFER = "/offer";
const KPI = "/kpi";
const EXTERNAL_CONTRACT = "/external-contract";
const SYSTEM_INFORMATION = "/system-information";
const MANUAL_PATCH = "/manual-patch";
const PRODUCT_TYPE = "/product-type";
const BRAND = "/brand";
const PRODUCT_MAIN_SET = "/product-main-set";
const PRODUCT_SET = "/product-set";
const PRODUCT = "/product";
const EMAIL_TEMPLATE = "/email-template";
const SLA = "/sla";
const SLA_TYPE = "/sla-type";
const SLA_MACHINE = "/sla-machine";
const SLA_MACHINE_VOLUME = "/sla-machine-volume";
const SLA_MACHINE_ITEM = "/sla-machine-item";
const TENDER = "/tender";
const PERMISSION = "/permission";
const ROLE = "/role";
const FILTER = "/filter";
const HISTORY = "/history";
const SCM_OBJECT = "/scm-object";
const SCM_TASK = "/scm-task";

/*--------------------------------------------------------------------*/

const USER_ROLE = "/role";
const USER_FEATURE = "/feature";
const BILLING_INTERVAL = "/billing-interval";
const CALCULATION = "/calculation";
const CONTACT_TYPE = "/contact-type";
const CUSTOMER_TYPE = "/customer-type";
const DELIVERY_ACCESS = "/delivery-access";
const DELIVERY_TO_DO = "/delivery-to-do";
const DELIVERY_TYPE = "/delivery-type";
const DOCUMENT_TYPE = "/document-type";
const OFFER_TYPE = "/offer-type";
const RECTIFICATION = "/rectification";
const CONTRACT_TYPE = "/contract-type";
const SETTING_TYPE = "/setting-type";
const ATTACHMENT_TYPE = "/attachment-type";
const DELIVERY_ADDRESS_ITEM_TYPE = "/delivery-address-item-type";
const CONTRACT_DOCUMENT_TYPE = "/document/document-type";
const SYSTEM_INFORMATION_TYPES = "/system-information-type";
const REJECT_REASONS = "/rejection-reason";
const COMPETITORS = "/competitor";
const OFFICE_BRANCH_IDS = "/office-branch-ids";
const SALES = "/sales";

/*--------------------------------------------------------------------*/

export const METHOD_COMMON_OFFER_STATUS_LOAD = COMMON + STATUS + OFFER + LOAD;
export const METHOD_COMMON_ORDER_STATUS_LOAD = COMMON + STATUS + ORDER + LOAD;
export const METHOD_COMMON_USER_ROLE_LOAD = COMMON + USER_ROLE + LOAD;
export const METHOD_COMMON_USER_FEATURE_LOAD = COMMON + USER_FEATURE + LOAD;
export const METHOD_COMMON_BILLING_INTERVAL_LOAD = COMMON + BILLING_INTERVAL + LOAD;
export const METHOD_COMMON_CALCULATION_LOAD = COMMON + CALCULATION + LOAD;
export const METHOD_COMMON_CONTACT_TYPE_LOAD = COMMON + CONTACT_TYPE + LOAD;
export const METHOD_COMMON_CUSTOMER_TYPE_LOAD = COMMON + CUSTOMER_TYPE + LOAD;
export const METHOD_COMMON_DELIVERY_ACCESS_LOAD = COMMON + DELIVERY_ACCESS + LOAD;
export const METHOD_COMMON_DELIVERY_TO_DO_LOAD = COMMON + DELIVERY_TO_DO + LOAD;
export const METHOD_COMMON_DELIVERY_TYPE_LOAD = COMMON + DELIVERY_TYPE + LOAD;
export const METHOD_COMMON_DOCUMENT_TYPE_LOAD = COMMON + DOCUMENT_TYPE + LOAD;
export const METHOD_COMMON_OFFER_TYPE_LOAD = COMMON + OFFER_TYPE + LOAD;
export const METHOD_COMMON_RECTIFICATION_LOAD = COMMON + RECTIFICATION + LOAD;
export const METHOD_COMMON_CONTRACT_TYPE_LOAD = COMMON + CONTRACT_TYPE + LOAD;
export const METHOD_COMMON_SETTING_TYPE_LOAD = COMMON + SETTING_TYPE + LOAD;
export const METHOD_COMMON_ATTACHMENT_TYPE_LOAD = COMMON + ATTACHMENT_TYPE + LOAD;
export const METHOD_COMMON_DELIVERY_ADDRESS_ITEM_TYPE_LOAD = COMMON + DELIVERY_ADDRESS_ITEM_TYPE + LOAD;
export const METHOD_COMMON_CONTRACT_DOCUMENT_TYPE_LOAD_ALL = CONTRACT_DOCUMENT_TYPE + LOAD;
export const METHOD_COMMON_SYSTEM_INFORMATION_TYPES_LOAD = COMMON + SYSTEM_INFORMATION_TYPES + LOAD;
export const METHOD_COMMON_REJECT_REASONS_LOAD = COMMON + REJECT_REASONS + LOAD;
export const METHOD_COMMON_COMPETITORS_LOAD = COMMON + COMPETITORS + LOAD;
export const METHOD_COMMON_LOAD_OFFICE_BRANCH_IDS = COMMON + OFFICE_BRANCH_IDS + LOAD;

/*--------------------------------------------------------------------*/

const REPORT = "/report";
const REPORT_MAPPING = "/report-mapping";
const SQL_FUNCTION = "/sql-function";

/*--------------------------------------------------------------------*/

export const PATH_METHOD_REPORT_MAPPING_LOAD = REPORT_MAPPING + LOAD;
export const PATH_METHOD_REPORT_MAPPING_ADD = REPORT_MAPPING + ADD;
export const PATH_METHOD_REPORT_MAPPING_DELETE = REPORT_MAPPING + DELETE;
export const PATH_METHOD_REPORT_MAPPING_MODIFY = REPORT_MAPPING + MODIFY;

export const PATH_METHOD_SQL_FUNCTION_LOAD = SQL_FUNCTION + LOAD;

export const PATH_TEMPLATE_CREATE_OFFER = TEMPLATE + OFFER + ADD;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_KPI_LOAD = KPI + LOAD;
export const PATH_METHOD_KPI_GENERATE_REPORT = KPI + REPORT + GENERATE;
export const PATH_METHOD_KPI_LOAD_REPORT_DATA = KPI + REPORT + LOAD;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_EXTERNAL_CONTRACT = EXTERNAL_CONTRACT;
export const PATH_METHOD_EXTERNAL_CONTRACTS_OVERVIEW = EXTERNAL_CONTRACT + OVERVIEW;
export const PATH_METHOD_EXTERNAL_CONTRACT_DETAILS = EXTERNAL_CONTRACT + DETAILS;
export const PATH_METHOD_SYSTEM_INFORMATION_LOAD = SYSTEM_INFORMATION + LOAD;
export const PATH_METHOD_SYSTEM_INFORMATION_CURRENTLY_PUBLISHED = SYSTEM_INFORMATION + CURRENTLY_PUBLISHED;
export const PATH_METHOD_SYSTEM_INFORMATION_PUBLISH = SYSTEM_INFORMATION + PUBLISH;
export const PATH_METHOD_SYSTEM_INFORMATION_UNPUBLISH = SYSTEM_INFORMATION + UNPUBLISH;
export const PATH_METHOD_SYSTEM_INFORMATION_ADD = SYSTEM_INFORMATION + ADD;
export const PATH_METHOD_SYSTEM_INFORMATION_MODIFY = SYSTEM_INFORMATION + MODIFY;
export const PATH_METHOD_SYSTEM_INFORMATION_DELETE = SYSTEM_INFORMATION + DELETE;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_SQL_SCRIPTS_LOAD = MANUAL_PATCH + LOAD;
export const PATH_METHOD_SQL_SCRIPT_EXECUTE = MANUAL_PATCH + EXECUTE;
export const PATH_METHOD_SQL_SCRIPT_ADD = MANUAL_PATCH + ADD;
export const PATH_METHOD_SQL_SCRIPT_MODIFY = MANUAL_PATCH + MODIFY;
export const PATH_METHOD_SQL_SCRIPT_DELETE = MANUAL_PATCH + DELETE;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_PRODUCT_TYPES_LOAD = PRODUCT_TYPE + LOAD;
export const PATH_METHOD_PRODUCT_BRANDS_LOAD = BRAND + LOAD;
export const PATH_METHOD_PRODUCT_MAIN_SETS_LOAD = PRODUCT_MAIN_SET + LOAD;
export const PATH_METHOD_PRODUCT_SETS_LOAD = PRODUCT_SET + LOAD;
export const PATH_METHOD_PRODUCTS_LOAD = PRODUCT + LOAD;
export const PATH_METHOD_PRODUCTS_SEARCH = PRODUCT + SEARCH;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_EMAIL_TEMPLATE_LOAD = EMAIL_TEMPLATE + LOAD;
export const PATH_METHOD_EMAIL_TEMPLATE_ADD = EMAIL_TEMPLATE + ADD;
export const PATH_METHOD_EMAIL_TEMPLATE_MODIFY = EMAIL_TEMPLATE + MODIFY;
export const PATH_METHOD_EMAIL_TEMPLATE_DELETE = EMAIL_TEMPLATE + DELETE;

/*--------------------------------------------------------------------*/

export const SECOND = "/second";

export const PATH_METHOD_SLAS_LOAD = SLA + LOAD;
export const PATH_METHOD_SLA_TYPES_LOAD = SLA_TYPE + LOAD;
export const PATH_METHOD_SLA_MACHINES_LOAD = SLA_MACHINE + LOAD;
export const PATH_METHOD_SLA_MACHINE_VOLUMES_LOAD = SLA_MACHINE_VOLUME + LOAD + SLA_MACHINE;
export const PATH_METHOD_SLA_MACHINE_ITEMS_LOAD = SLA_MACHINE_ITEM + LOAD;
export const PATH_METHOD_SLA_MACHINE_ITEMS_LOAD_2 = SLA_MACHINE_ITEM + SECOND + LOAD;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_TENDERS_LOAD = TENDER + LOAD;
export const PATH_METHOD_ROLES_LOAD = PERMISSION + ROLE + LOAD + ALL;
export const PATH_METHOD_ROLE_ADD = PERMISSION + ROLE + ADD;
export const PATH_METHOD_ROLE_MODIFY = PERMISSION + ROLE + MODIFY;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_USER_ADD = USER + ADD;
export const PATH_METHOD_USER_MODIFY = USER + MODIFY;
export const PATH_METHOD_USER_LOAD = USER + LOAD;
export const PATH_METHOD_USER_REMOVE = USER + DELETE;
export const PATH_METHOD_USER_RESTORE = USER + RESTORE;
export const PATH_METHOD_USERS_OFFER_APPROVE_LOAD = USER + OFFER + APPROVE + LOAD;
export const PATH_METHOD_USERS_ORDER_APPROVE_LOAD = USER + ORDER + APPROVE + LOAD;
export const PATH_METHOD_USER_SALES_LOAD = USER + LOAD + SALES;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_PASSWORD_RESET = PASSWORD + RESET;
export const PATH_METHOD_PASSWORD_CHANGE = PASSWORD + RESET + HANDLE;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_FILTER_ADD = FILTER + ADD;
export const PATH_METHOD_FILTERS_LOAD = FILTER + LOAD;
export const PATH_METHOD_FILTER_MODIFY = FILTER + MODIFY;
export const PATH_METHOD_FILTER_REMOVE = FILTER + DELETE;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_CONTRACT_LOAD = CONTRACT + LOAD;
export const PATH_METHOD_CONTRACT_HISTORY_LOAD = HISTORY + LOAD + CONTRACT;
export const PATH_METHOD_CONTRACT_LOAD_FOR_HISTORY = HISTORY + LOAD;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_NEW_TEMPLATE_LOAD = TEMPLATE + TEMPLATE;
export const PATH_METHOD_NEW_PERSONAL_TEMPLATE_LOAD = TEMPLATE + TEMPLATE + PERSONAL;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_PRODUCT_GROUP_EXPORT = PRODUCT_GROUP + EXPORT;
export const PATH_METHOD_LOAD_EXPORT_HISTORY = HISTORY + LOAD;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_SCM_OBJECTS_LOAD = SCM_OBJECT + LOAD;
export const PATH_METHOD_SCM_OBJECT_NEW = SCM_OBJECT + ADD;
export const PATH_METHOD_SCM_OBJECT_MODIFY = SCM_OBJECT + MODIFY;

/*--------------------------------------------------------------------*/

export const PATH_METHOD_SCM_TASKS_LOAD = SCM_TASK + LOAD;
export const PATH_METHOD_SCM_TASK_MODIFY = SCM_TASK + MODIFY;
