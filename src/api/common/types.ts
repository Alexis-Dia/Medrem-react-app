import { ActionType } from "typesafe-actions";
import { Language } from "../../types/common";
import * as commonActions from "./commonActions";

export type CommonAction = ActionType<typeof commonActions>;

export interface CommonState {
    languages: Array<Language>;
}