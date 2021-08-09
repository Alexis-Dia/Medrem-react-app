import {
    fetchLanguagesAsync,
} from "./commonActions";
import { CommonAction, CommonState } from "./types";
import { getType } from "typesafe-actions";

const initialState = {
    languages: [],
};

export default (state: CommonState = initialState, action: CommonAction): CommonState => {
    switch (action.type) {

        case getType(fetchLanguagesAsync.success):
            return { ...state, languages: [...action.payload.result] };

        default:
            return state;
    }
};
