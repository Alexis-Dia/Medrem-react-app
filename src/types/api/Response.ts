interface BaseResponse {
    httpStatus: number;
}

export interface SuccessResponse extends BaseResponse {
    result: any;
}

export interface FailureResponse extends BaseResponse {
    errorMessage: string;
}

export type Response = SuccessResponse | FailureResponse;
