import { getType } from "typesafe-actions";
import { changeLocale } from "./localeActions";
import { LocaleAction, LocaleState } from "./types";

const initialState = {
    lang: "EN",
};

export default (state: LocaleState = initialState, action: LocaleAction): LocaleState => {

    switch (action.type) {

        case getType(changeLocale):
            return { ...state, lang: action.payload.language };

        default:
            return state;
    }
};
