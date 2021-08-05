import { call, takeEvery } from "redux-saga/effects";
import {
    fetchAttachmentTypesApi,
    fetchLanguagesApi,
} from "./commonApi";
import {
    fetchAttachmentTypesAsync,
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

function * tryFetchAttachmentTypes(): Generator {
    const response = <Response> (yield call(fetchAttachmentTypesApi));
    yield handleResponse(fetchAttachmentTypesAsync, response);
}

export function * attachmentTypesFetch() {
    yield takeEvery(fetchAttachmentTypesAsync.request, tryFetchAttachmentTypes);
}




