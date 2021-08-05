import { apiCallForLoggedUser } from "../../services/api/axiosApi";
import { PATH_METHOD_FETCH_FEATURES_FOR_ROLES, PATH_METHOD_LANGUAGES_LOAD_ALL } from "../../properties/properties";
import {
    METHOD_COMMON_ATTACHMENT_TYPE_LOAD,
    METHOD_COMMON_BILLING_INTERVAL_LOAD,
    METHOD_COMMON_CALCULATION_LOAD,
    METHOD_COMMON_COMPETITORS_LOAD,
    METHOD_COMMON_CONTACT_TYPE_LOAD,
    METHOD_COMMON_CONTRACT_TYPE_LOAD,
    METHOD_COMMON_CUSTOMER_TYPE_LOAD,
    METHOD_COMMON_DELIVERY_ACCESS_LOAD,
    METHOD_COMMON_DELIVERY_ADDRESS_ITEM_TYPE_LOAD,
    METHOD_COMMON_DELIVERY_TO_DO_LOAD,
    METHOD_COMMON_DELIVERY_TYPE_LOAD,
    METHOD_COMMON_DOCUMENT_TYPE_LOAD,
    METHOD_COMMON_LOAD_OFFICE_BRANCH_IDS,
    METHOD_COMMON_OFFER_TYPE_LOAD,
    METHOD_COMMON_RECTIFICATION_LOAD,
    METHOD_COMMON_REJECT_REASONS_LOAD,
    METHOD_COMMON_SETTING_TYPE_LOAD,
    METHOD_COMMON_SYSTEM_INFORMATION_TYPES_LOAD,
    METHOD_COMMON_USER_FEATURE_LOAD,
    METHOD_COMMON_USER_ROLE_LOAD,
    AVAILABLE,
    COMMON,
    STATUS,
    LOAD,
    METHOD_COMMON_CONTRACT_DOCUMENT_TYPE_LOAD_ALL,
    METHOD_COMMON_OFFER_STATUS_LOAD,
    METHOD_COMMON_ORDER_STATUS_LOAD,
} from "../../services/api/Navigation";
import { ContractType } from "../../types/contract";
import { ListWrapper } from "../../types/common";

export const fetchOfferStatusesApi = () => apiCallForLoggedUser(METHOD_COMMON_OFFER_STATUS_LOAD);

export const fetchOrderStatusesApi = () => apiCallForLoggedUser(METHOD_COMMON_ORDER_STATUS_LOAD);

export const fetchAvailableContractStatusesApi = (type: ContractType) => apiCallForLoggedUser(`${COMMON}${STATUS}/${type}${AVAILABLE}${LOAD}`);

export const fetchUserFeaturesApi = () => apiCallForLoggedUser(METHOD_COMMON_USER_FEATURE_LOAD);

export const fetchUserRolesApi = () => apiCallForLoggedUser(METHOD_COMMON_USER_ROLE_LOAD);

export const fetchCalculationsApi = () => apiCallForLoggedUser(METHOD_COMMON_CALCULATION_LOAD);

export const fetchCustomerTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_CUSTOMER_TYPE_LOAD);

export const fetchDeliveryAccessesApi = () => apiCallForLoggedUser(METHOD_COMMON_DELIVERY_ACCESS_LOAD);

export const fetchDeliveryTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_DELIVERY_TYPE_LOAD);

export const fetchDocumentTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_DOCUMENT_TYPE_LOAD);

export const fetchOfferTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_OFFER_TYPE_LOAD);

export const fetchContractTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_CONTRACT_TYPE_LOAD);

export const fetchContactTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_CONTACT_TYPE_LOAD);

export const fetchBillingIntervalsApi = () => apiCallForLoggedUser(METHOD_COMMON_BILLING_INTERVAL_LOAD);

export const fetchRectificationsApi = () => apiCallForLoggedUser(METHOD_COMMON_RECTIFICATION_LOAD);

export const fetchDeliveryToDosApi = () => apiCallForLoggedUser(METHOD_COMMON_DELIVERY_TO_DO_LOAD);

export const fetchFeaturesForRolesApi = (roles: ListWrapper<string>) => apiCallForLoggedUser(PATH_METHOD_FETCH_FEATURES_FOR_ROLES, roles);

export const fetchSettingTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_SETTING_TYPE_LOAD);

export const fetchLanguagesApi = () => apiCallForLoggedUser(PATH_METHOD_LANGUAGES_LOAD_ALL);

export const fetchAttachmentTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_ATTACHMENT_TYPE_LOAD);

export const fetchDeliveryAddressItemTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_DELIVERY_ADDRESS_ITEM_TYPE_LOAD);

export const fetchSystemInformationTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_SYSTEM_INFORMATION_TYPES_LOAD);

export const fetchRejectionReasonsApi = () => apiCallForLoggedUser(METHOD_COMMON_REJECT_REASONS_LOAD);

export const fetchCompetitorsApi = () => apiCallForLoggedUser(METHOD_COMMON_COMPETITORS_LOAD);

export const fetchOfficeBranchIdsApi = () => apiCallForLoggedUser(METHOD_COMMON_LOAD_OFFICE_BRANCH_IDS);

export const fetchContractDocumentTypesApi = () => apiCallForLoggedUser(METHOD_COMMON_CONTRACT_DOCUMENT_TYPE_LOAD_ALL);
