import { createAction } from "typesafe-actions";

export const changeLocale = createAction(
    "CHANGE_LOCALE",
    (language: string) => ({ language }),
)();
