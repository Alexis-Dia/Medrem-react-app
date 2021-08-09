import { all } from "redux-saga/effects";

import { login } from "../api/login/loginSagas";

export default function * rootSaga() {
    yield all([
        login(),
    ]);
}
