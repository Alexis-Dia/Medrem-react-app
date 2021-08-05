import { createAsyncAction } from "typesafe-actions";
import { SuccessResponse, FailureResponse } from "../../types/api";

const SUCCESS = "_SUCCESS";
const FAILURE = "_FAILURE";

export function createCommonAsyncAction<T extends string>(type: T) {
    const asyncAction = createAsyncAction(
        type,
        //@ts-ignore
        `${type}${SUCCESS}` as const,
        //@ts-ignore
        `${type}${FAILURE}` as const,
    );

    return function apply<P = undefined, S = SuccessResponse, F = FailureResponse>() {
        return asyncAction<P, S, F>();
    };
}
