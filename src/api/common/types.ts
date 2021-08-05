import { ActionType } from "typesafe-actions";
import { AddressShortDto } from "../../types/address";
import { Language } from "../../types/common";
import {
    AttachmentType,
    Competitor,
    ContactType,
    ContractDocumentTypeDto,
    ContractStatus,
    ContractType,
    CustomerType,
    DeliveryAccess,
    DeliveryToDo,
    DeliveryType,
    DocumentType,
    Interval,
    OfferType,
    RejectionReason,
} from "../../types/contract";
import { DeliveryAddressItemType } from "../../types/product";
import { SettingType } from "../../types/settings";
import { SystemInformationType } from "../../types/systemInformation";
import * as commonActions from "./commonActions";
import { CalculationDto } from "../../types/common/CalculationDto";

export interface SaveSuggestionPayload {
    key: string;
    value?: string | AddressShortDto;
    index?: number;
}

export interface CommonState {
    offerStatuses: Array<ContractStatus>;
    orderStatuses: Array<ContractStatus>;
    availableStatuses: Array<ContractStatus>;
    userRoles: Array<string>;
    userFeatures: Array<string>;
    rectifications: Array<Interval>;
    offerTypes: Array<OfferType>;
    documentTypes: Array<DocumentType>;
    deliveryTypes: Array<DeliveryType>;
    deliveryToDos: Array<DeliveryToDo>;
    deliveryAccesses: Array<DeliveryAccess>;
    contractTypes: Array<ContractType>;
    customerTypes: Array<CustomerType>;
    contactTypes: Array<ContactType>;
    calculations: Array<CalculationDto>;
    billingIntervals: Array<Interval>;
    featuresForRoles: Array<string>;
    settingsTypes: Array<SettingType>;
    languages: Array<Language>;
    attachmentTypes: Array<AttachmentType>;
    itemTypes: Array<DeliveryAddressItemType>;
    suggestionStatus: SaveSuggestionPayload | null;
    systemInformationTypes: Array<SystemInformationType>;
    rejectionReasons: Array<RejectionReason>;
    competitors: Array<Competitor>;
    officeBranchIds: Array<number>;
    contractDocumentTypes: Array<ContractDocumentTypeDto>;
}

export interface CommonState {
    offerStatuses: Array<ContractStatus>;
    orderStatuses: Array<ContractStatus>;
    availableStatuses: Array<ContractStatus>;
    userRoles: Array<string>;
    userFeatures: Array<string>;
    rectifications: Array<Interval>;
    offerTypes: Array<OfferType>;
    documentTypes: Array<DocumentType>;
    deliveryTypes: Array<DeliveryType>;
    deliveryToDos: Array<DeliveryToDo>;
    deliveryAccesses: Array<DeliveryAccess>;
    contractTypes: Array<ContractType>;
    customerTypes: Array<CustomerType>;
    contactTypes: Array<ContactType>;
    calculations: Array<CalculationDto>;
    billingIntervals: Array<Interval>;
    featuresForRoles: Array<string>;
    settingsTypes: Array<SettingType>;
    languages: Array<Language>;
    attachmentTypes: Array<AttachmentType>;
    itemTypes: Array<DeliveryAddressItemType>;
    suggestionStatus: SaveSuggestionPayload | null;
    systemInformationTypes: Array<SystemInformationType>;
    rejectionReasons: Array<RejectionReason>;
    competitors: Array<Competitor>;
    officeBranchIds: Array<number>;
    contractDocumentTypes: Array<ContractDocumentTypeDto>;
}

export type CommonAction = ActionType<typeof commonActions>;
