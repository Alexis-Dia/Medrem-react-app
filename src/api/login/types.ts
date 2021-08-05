import { ActionType } from "typesafe-actions";
import { Language } from "../../types/common";
import * as loginActions from "./loginActions";

export interface UserErrors {
    invalidCredentials: string;
    serverIsUnreachable: string;
}

export interface UserPayload {
    username: string | null;
    password: string | null;
    errors: UserErrors | string;
    originErrors?: string;
}

export interface LogOutPayload {
    originLogOutMessage: string;
    logOutMessage: string;
}

interface HandshakeDto {
    token: string;
	features: string;
	roles: string;
	username: string;
	identity: string;
	language: Language;
}

interface HandshakeDto {
    token: string;
	features: string;
	roles: string;
	username: string;
	identity: string;
	language: Language;
}

export interface LoginState {
    isAuthenticated: boolean,
    onCloseClicked: boolean,
    user: Partial<HandshakeDto> & Partial<UserPayload>;
}

export type LoginAction = ActionType<typeof loginActions>;
