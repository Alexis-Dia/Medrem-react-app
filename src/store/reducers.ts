import { combineReducers } from "redux";
import locationReducer from "./location";
import authReducer from "../api/login/loginReducer";
import flashReducer from "../api/flash/flashReducer";
import localeReducer from "../api/lang/localeReducer";


export const rootReducer = combineReducers({
    location: locationReducer,
    auth: authReducer,
    flashMessages: flashReducer,
    locale: localeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
