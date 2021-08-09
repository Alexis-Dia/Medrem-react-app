import { combineReducers } from "redux";
import locationReducer from "./location";
import authReducer from "../api/login/loginReducer";
import flashReducer from "../api/flash/flashReducer";
import localeReducer from "../api/lang/localeReducer";
import commonReducer from "../api/common/commonReducer";
import errorReducer from "../api/error/errorReducer";

export const rootReducer = combineReducers({
    location: locationReducer,
    auth: authReducer,
    flashMessages: flashReducer,
    locale: localeReducer,
    common: commonReducer,
    error: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
