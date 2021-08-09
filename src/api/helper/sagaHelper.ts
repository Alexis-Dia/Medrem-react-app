import { put } from "redux-saga/effects";
import { FailureResponse, Response, SuccessResponse } from "../../types/api";
import { ActionCreator } from "typesafe-actions";
import { HttpStatus } from "../../types/common/HttpStatus";

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

