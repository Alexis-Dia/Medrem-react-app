import { takeEvery, call, put } from "redux-saga/effects";
import { loginApi, healthCheckApi } from "./loginApi";
import { healthCheckAsync, loginAsync } from "./loginActions";
import { Response, SuccessResponse } from "../../types/api";
import { handleResponse } from "../helper/sagaHelper";
import { HttpStatus } from "../../types/common/HttpStatus";
import { UserErrors } from "./types";

function * tryLogin(action: ReturnType<typeof loginAsync.request>): Generator {
    const response = <Response> (yield call(loginApi, action.payload));
    if (typeof response === "undefined") {
        yield put(loginAsync.failure((action.payload.errors as UserErrors).serverIsUnreachable));
    } else if (response.httpStatus === HttpStatus.OK) {
        yield put(loginAsync.success(response as SuccessResponse));
    } else {
        yield put(loginAsync.failure((action.payload.errors as UserErrors).invalidCredentials));
    }
}

export function * login() {
    yield takeEvery(loginAsync.request, tryLogin);
}

function * tryHealthCheck(): Generator {
    const response = <Response> (yield call(healthCheckApi));
    yield handleResponse(healthCheckAsync, response);
}

export function * healthCheck() {
    yield takeEvery(healthCheckAsync.request, tryHealthCheck);
}
