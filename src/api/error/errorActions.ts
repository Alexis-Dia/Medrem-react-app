import { createAction } from "typesafe-actions";

export const gotError = createAction(
    "GOT_ERROR",
    (response: any) => ({ response }),
)();

export const closeError = createAction(
    "CLOSE_ERROR",
)();
