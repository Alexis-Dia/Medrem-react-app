import { ActionType } from "typesafe-actions";
import * as localeActions from "./localeActions";

export interface LocaleState {
    lang: string;
}

export type LocaleAction = ActionType<typeof localeActions>;
