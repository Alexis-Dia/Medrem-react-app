import {
    fetchOfferStatusesAsync,
    fetchOrderStatusesAsync,
    fetchAvailableContractStatusesAsync,
    fetchUserRolesAsync,
    fetchUserFeaturesAsync,
    fetchRectificationsAsync,
    fetchOfferTypesAsync,
    fetchContractTypesAsync,
    fetchDocumentTypesAsync,
    fetchDeliveryTypesAsync,
    fetchDeliveryToDosAsync,
    fetchDeliveryAccessesAsync,
    fetchCustomerTypesAsync,
    fetchContactTypesAsync,
    fetchCalculationsAsync,
    fetchBillingIntervalsAsync,
    fetchFeaturesForRolesAsync,
    fetchSettingTypesAsync,
    fetchLanguagesAsync,
    fetchAttachmentTypesAsync,
    fetchDeliveryAddressItemTypesAsync,
    fetchContractDocumentTypesAsync,
    fetchSystemInformationTypesAsync,
    fetchRejectionReasonsAsync,
    fetchCompetitorsAsync,
    fetchOfficeBranchIdsAsync,
    saveSuggestion,
} from "./commonActions";
import { CommonAction, CommonState } from "./types";
import { getType } from "typesafe-actions";

const initialState = {
    offerStatuses: [],
    orderStatuses: [],
    availableStatuses: [],
    userRoles: [],
    userFeatures: [],
    rectifications: [],
    offerTypes: [],
    documentTypes: [],
    deliveryTypes: [],
    deliveryToDos: [],
    deliveryAccesses: [],
    contractTypes: [],
    customerTypes: [],
    contactTypes: [],
    calculations: [],
    billingIntervals: [],
    featuresForRoles: [],
    settingsTypes: [],
    languages: [],
    attachmentTypes: [],
    itemTypes: [],
    suggestionStatus: null,
    systemInformationTypes: [],
    rejectionReasons: [],
    competitors: [],
    officeBranchIds: [],
    contractDocumentTypes: [],
};

export default (state: CommonState = initialState, action: CommonAction): CommonState => {
    switch (action.type) {
        case getType(fetchOfferStatusesAsync.success):
            return { ...state, offerStatuses: [...action.payload.result] };

        case getType(fetchOrderStatusesAsync.success):
            return { ...state, orderStatuses: [...action.payload.result] };

        case getType(fetchAvailableContractStatusesAsync.success):
            return { ...state, availableStatuses: [...action.payload.result] };

        case getType(fetchUserRolesAsync.success):
            return { ...state, userRoles: [...action.payload.result] };

        case getType(fetchUserFeaturesAsync.success):
            return { ...state, userFeatures: [...action.payload.result] };

        case getType(fetchRectificationsAsync.success):
            return { ...state, rectifications: [...action.payload.result] };

        case getType(fetchOfferTypesAsync.success):
            return { ...state, offerTypes: [...action.payload.result] };

        case getType(fetchContractTypesAsync.success):
            return { ...state, contractTypes: [...action.payload.result] };

        case getType(fetchDocumentTypesAsync.success):
            return { ...state, documentTypes: [...action.payload.result] };

        case getType(fetchDeliveryTypesAsync.success):
            return { ...state, deliveryTypes: [...action.payload.result] };

        case getType(fetchDeliveryToDosAsync.success):
            return { ...state, deliveryToDos: [...action.payload.result] };

        case getType(fetchDeliveryAccessesAsync.success):
            return { ...state, deliveryAccesses: [...action.payload.result] };

        case getType(fetchCustomerTypesAsync.success):
            return { ...state, customerTypes: [...action.payload.result] };

        case getType(fetchContactTypesAsync.success):
            return { ...state, contactTypes: [...action.payload.result] };

        case getType(fetchCalculationsAsync.success):
            return { ...state, calculations: [...action.payload.result] };

        case getType(fetchBillingIntervalsAsync.success):
            return { ...state, billingIntervals: [...action.payload.result] };

        case getType(fetchFeaturesForRolesAsync.success):
            return { ...state, featuresForRoles: [...action.payload.result] };

        case getType(fetchSettingTypesAsync.success):
            return { ...state, settingsTypes: [...action.payload.result] };

        case getType(fetchLanguagesAsync.success):
            return { ...state, languages: [...action.payload.result] };

        case getType(fetchAttachmentTypesAsync.success):
            return { ...state, attachmentTypes: [...action.payload.result] };

        case getType(fetchDeliveryAddressItemTypesAsync.success):
            return { ...state, itemTypes: [...action.payload.result] };

        case getType(fetchContractDocumentTypesAsync.success):
            return { ...state, contractDocumentTypes: [...action.payload.result] };

        case getType(fetchSystemInformationTypesAsync.success):
            return { ...state, systemInformationTypes: [...action.payload.result] };

        case getType(fetchRejectionReasonsAsync.success):
            return { ...state, rejectionReasons: [...action.payload.result] };

        case getType(fetchCompetitorsAsync.success):
            return { ...state, competitors: [...action.payload.result] };

        case getType(fetchOfficeBranchIdsAsync.success):
            return { ...state, officeBranchIds: [...action.payload.result] };

        case getType(saveSuggestion):
            return { ...state, suggestionStatus: action.payload };

        default:
            return state;
    }
};
