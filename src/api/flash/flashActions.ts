import { createAction } from "typesafe-actions";

export const addFlashMessage = createAction(
    "ADD_FLASH_MESSAGE",
    (type: string, text: string) => ({ type, text }),
)();

export const addAutoRemovableFlashMessage = createAction(
    "ADD_AUTO_REMOVABLE_FLASH_MESSAGE",
    (type: string, text: string, delay: number) => ({ type, text, delay }),
)();

export const deleteFlashMessageByText = createAction(
    "DELETE_FLASH_MESSAGE_BY_TEXT",
    (text: string) => ({ text }),
)();

export const deleteFlashMessageById = createAction(
    "DELETE_FLASH_MESSAGE_BY_ID",
    (id: string) => ({ id }),
)();

export const deleteAllFlashMessages = createAction(
    "DELETE_ALL_FLASH_MESSAGES",
)();
