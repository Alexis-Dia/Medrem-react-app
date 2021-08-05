import findIndex from "lodash/findIndex";
import { getType } from "typesafe-actions";
import * as flashActions from "./flashActions";
import { FlashMessagesState, FlashMessagesAction } from "./types";
import nextId from "react-id-generator";

const deleteByIndex = (state: FlashMessagesState, index: number) => (index >= 0 ?
    [
        ...state.slice(0, index),
        ...state.slice(index + 1),
    ]
    : state)
;

export default (state: FlashMessagesState = [], action: FlashMessagesAction): FlashMessagesState => {

    switch (action.type) {
        case getType(flashActions.addFlashMessage):
        case getType(flashActions.addAutoRemovableFlashMessage):
            return [
                ...state,
                {
                    id: nextId(),
                    ...action.payload,
                },
            ];

        case getType(flashActions.deleteFlashMessageById): {
            const indexById = findIndex(state, {
                id: action.payload.id,
            });
            return deleteByIndex(state, indexById);
        }

        case getType(flashActions.deleteFlashMessageByText): {
            const indexByText = findIndex(state, {
                text: action.payload.text,
            });
            return deleteByIndex(state, indexByText);
        }

        case getType(flashActions.deleteAllFlashMessages):
            return [];

        default:
            return state;
    }
};
