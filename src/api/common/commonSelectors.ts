import { RootState } from "../../store/reducers";

export const rejectionReasonsSelector = (state: RootState) => state.commonData.rejectionReasons;

export const competitorSelector = (state: RootState) => state.commonData.competitors;

export const itemTypesSelector = (state: RootState) => state.commonData.itemTypes;

export const deliveryAddressItemTypesSelector = (state: RootState) => state.commonData.itemTypes;
export const deliveryTypesSelector = (state: RootState) => state.commonData.deliveryTypes;
export const deliveryToDosSelector = (state: RootState) => state.commonData.deliveryToDos;
export const deliveryAccessesSelector = (state: RootState) => state.commonData.deliveryAccesses;

export const systemInformationTypesSelector = (state: RootState) => state.commonData.systemInformationTypes;

export const languagesSelector = (state: RootState) => state.commonData.languages;
