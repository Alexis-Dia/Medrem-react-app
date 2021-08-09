import { call, takeEvery } from "redux-saga/effects";
import {
    fetchLanguagesApi,
} from "./commonApi";
import {
    fetchLanguagesAsync,
} from "./commonActions";
import { handleResponse } from "../helper/sagaHelper";
import { Response } from "../../types/api";

function * tryFetchLanguages(): Generator {
    const response = <Response> (yield call(fetchLanguagesApi));
    yield handleResponse(fetchLanguagesAsync, response);
}

export function * languagesFetch() {
    yield takeEvery(fetchLanguagesAsync.request, tryFetchLanguages);
}




