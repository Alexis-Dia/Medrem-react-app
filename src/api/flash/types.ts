import { ActionType } from "typesafe-actions";
import { FlashMessage } from "../../types/flash";
import * as flashActions from "./flashActions";

export type FlashMessagesState = Array<FlashMessage>;

export type FlashMessagesAction = ActionType<typeof flashActions>;
