import jwt from "jsonwebtoken";
import isEmpty from "lodash/isEmpty";
import { getType } from "typesafe-actions";
import {
    loginAsync,
    logOut,
    healthCheckAsync,
    loginFromToken,
    onCloseClicked,
} from "./loginActions";
import { LoginState, LoginAction } from "./types";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import {
    JWT_TOKEN,
    ROLES,
    FEATURES,
    USERNAME,
    SETUP_TIME,
    IDENTITY,
} from "../../properties/properties";

const initialState = {
    isAuthenticated: false,
    onCloseClicked: true,
    user: {},
};

export default (state: LoginState = initialState, action?: LoginAction): LoginState => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case getType(loginAsync.success): {
            const { token, roles, username, features, identity } = action.payload.result;
            if (token) {
                const now = new Date().getTime();
                localStorage.setItem(JWT_TOKEN, token);
                localStorage.setItem(ROLES, roles);
                localStorage.setItem(USERNAME, username);
                localStorage.setItem(FEATURES, features);
                localStorage.setItem(SETUP_TIME, String(now));
                localStorage.setItem(IDENTITY, identity);

                setAuthorizationToken(token);

                return {
                    ...state,
                    isAuthenticated: false,
                    onCloseClicked: false,
                    user: action.payload.result,
                };
            }
            return state;
        }

        case getType(loginAsync.failure):
            return {
                ...state,
                isAuthenticated: false,
                user: {
                    errors: action.payload,
                },
            };

        case getType(logOut):
            localStorage.removeItem(JWT_TOKEN);
            localStorage.removeItem(ROLES);
            localStorage.removeItem(FEATURES);
            localStorage.removeItem(USERNAME);
            localStorage.removeItem(IDENTITY);
            setAuthorizationToken(false);

            return {
                ...state,
                isAuthenticated: false,
                onCloseClicked: true,
                user: action.payload
                    ? {
                        errors: action.payload.logOutMessage,
                        originErrors: action.payload.originLogOutMessage,
                    }
                    : {},
            };

        case getType(loginFromToken): {
            const user = jwt.decode(action.payload.token);
            return {
                ...state,
                isAuthenticated: isEmpty(user.errors),
                onCloseClicked: false,
                user,
            };
        }

        case getType(healthCheckAsync.success):
        case getType(healthCheckAsync.failure):
            return state;

        case getType(onCloseClicked):
            return { ...state, onCloseClicked: true };

        default:
            return state;
    }
};
