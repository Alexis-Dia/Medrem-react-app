import { put, select } from "redux-saga/effects";
import { FailureResponse, Response, SuccessResponse } from "../../types/api";
import { ActionCreator } from "typesafe-actions";
import { HttpStatus } from "../../types/common/HttpStatus";
import { RootState } from "../../store/reducers";

interface AsyncAction {
    request: ActionCreator<string>,
    success: ActionCreator<string>,
    failure: ActionCreator<string>,
    cancel?: ActionCreator<string>,
}

export function * handleResponse (asyncAction: AsyncAction, response: Response) {
    if (response.httpStatus === HttpStatus.OK) {
        yield put(asyncAction.success(response as SuccessResponse));
    } else {
        yield put(asyncAction.failure(response as FailureResponse));
    }
}

export function * handleNoContentResponse (asyncAction: AsyncAction, response: Response, payload: any) {
    if (response.httpStatus === HttpStatus.OK) {
        yield put(asyncAction.success(payload));
    } else {
        yield put(asyncAction.failure(response as FailureResponse));
    }
}

export function * handleResponseWithNewRequest (asyncAction: AsyncAction, response: Response, selector: (state: RootState) => any, newRequest: ActionCreator<string>) {
    if (response.httpStatus === HttpStatus.OK) {
        const stateForRequest = yield select(selector);
        yield put(newRequest(stateForRequest));
    } else {
        yield put(asyncAction.failure(response as FailureResponse));
    }
}
