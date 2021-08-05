import { all } from "redux-saga/effects";

import { login, healthCheck } from "../api/login/loginSagas";

export default function * rootSaga() {
    yield all([
        login(),
    ]);
}
