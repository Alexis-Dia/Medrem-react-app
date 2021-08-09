import { all } from "redux-saga/effects";

import { login } from "../api/login/loginSagas";
import { languagesFetch } from "../api/common/commonSagas";
import { flashMessageDelay } from "../api/flash/flashSagas";

export default function * rootSaga() {
    yield all([
        login(),
        languagesFetch(),
        flashMessageDelay()
    ]);
}
