import { getType } from "typesafe-actions";
import { ErrorDto } from "../../types/error/ErrorDto";
import * as errorActions from "./errorActions";
import { ErrorAction, ErrorState } from "./types";

export default (state: ErrorState = null, action: ErrorAction): ErrorDto | null => {

    switch (action.type) {
        case getType(errorActions.gotError):
            return { ...state, ...action.payload.response.data };

        case getType(errorActions.closeError):
            return null;

        default:
            return state;
    }
};
