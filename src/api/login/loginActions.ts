import { createAction } from "typesafe-actions";
import { SuccessResponse } from "../../types/api";
import { createCommonAsyncAction } from "../helper/actionHelper";
import { UserPayload, LogOutPayload } from "./types";

export const loginAsync = createCommonAsyncAction("LOGIN")<UserPayload, SuccessResponse, string>();

export const login = (payload: UserPayload) => loginAsync.request(payload);

export const logOut = createAction(
    "LOG_OUT",
    (payload?: LogOutPayload) => payload,
)();

export const loginFromToken = createAction(
    "LOGIN_FROM_TOKEN",
    (token: string) => ({ token }),
)();

export const healthCheckAsync = createCommonAsyncAction("HEALTH_CHECK")();

export const onCloseClicked = createAction(
    "ON_CLOSE_CLICKED",
)();
