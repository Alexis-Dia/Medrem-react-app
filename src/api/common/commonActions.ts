import { createCommonAsyncAction } from "../helper/actionHelper";

export const fetchLanguagesAsync = createCommonAsyncAction("FETCH_LANGUAGES")();

export const fetchLanguages = () => fetchLanguagesAsync.request();


