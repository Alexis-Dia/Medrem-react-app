import { createAction } from "typesafe-actions";
import { createCommonAsyncAction } from "../helper/actionHelper";
import { SaveSuggestionPayload } from "./types";

export const fetchLanguagesAsync = createCommonAsyncAction("FETCH_LANGUAGES")();

export const fetchLanguages = () => fetchLanguagesAsync.request();

export const fetchAttachmentTypesAsync = createCommonAsyncAction("FETCH_ATTACHMENT_TYPES")();

export const saveSuggestion = createAction(
    "SAVE_SUGGESTION",
    (payload: SaveSuggestionPayload | null) => payload,
)();
