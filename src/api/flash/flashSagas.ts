import { delay, put, takeEvery } from "redux-saga/effects";
import { addAutoRemovableFlashMessage, deleteFlashMessageByText } from "./flashActions";

export function * tryDelayFlashMessage (action: ReturnType<typeof addAutoRemovableFlashMessage>): Generator {
    yield delay(action.payload.delay);
    yield put(deleteFlashMessageByText(action.payload.text));
}

export function * flashMessageDelay () {
    yield takeEvery(addAutoRemovableFlashMessage, tryDelayFlashMessage);
}
