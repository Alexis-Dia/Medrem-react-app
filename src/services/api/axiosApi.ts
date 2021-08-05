import axios, { AxiosRequestConfig } from "axios";
import { APPLICATION_JSON, BEARER, FEATURES, HOSTNAME, IDENTITY, JSON_TYPE, JWT_TOKEN, PORT, POST, ROLES, USERNAME, UTC_FORMAT } from "../../properties/properties";
import setAuthorizationToken from "../../utils/setAuthorizationToken";

import project from "../../../project.config";
import { HttpStatus } from "../../types/common/HttpStatus";
import DateService from "../common/DateService";

export const getUrl = (hostname: string, port: number, pathMethod: string) => (project.env === "development"
    ? `https://${hostname}:${port}${pathMethod}`
    : `${window.location.origin}${pathMethod}`
);

export const apiCall = (pathMethod: string, body = {}, method = POST, hostname = HOSTNAME, port = PORT) => {
    const options = {
        method,
        url: getUrl(hostname, port, pathMethod),
        headers: {
            "Content-Type": APPLICATION_JSON,
        },
        responseType: JSON_TYPE,
        data: body,
    };
    return axios(options).catch((error) => {
        throw error;
    });
};

export interface ApiResponse<T> {
    httpStatus: HttpStatus;
    result: T;
}

axios.interceptors.request.use((config): AxiosRequestConfig => {
    config.data = DateService.modifyDateToJSON(config.data, UTC_FORMAT);
    return config;
});

export const apiCallForLoggedUser = <T> (pathMethod: string, body = {}, method = POST, hostname = HOSTNAME, port = PORT, responseType = JSON_TYPE) => {
    const options = {
        method,
        url: getUrl(hostname, port, pathMethod),
        headers: {
            Authorization: BEARER + localStorage.jwtToken,
            Identity: localStorage.identity,
        },
        responseType,
        data: body,
    };
    return axios(options)
        .then((response): ApiResponse<T> => {
            const token = response.headers["access-token"];
            if (token) {
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
            }
            return { httpStatus: HttpStatus.OK, result: response.data };
        })
        .catch((error) => {
            if (error.response.data.status === HttpStatus.UNAUTHORIZED && error.response.data.error === "Unauthorized") {
                localStorage.removeItem(JWT_TOKEN);
                localStorage.removeItem(ROLES);
                localStorage.removeItem(FEATURES);
                localStorage.removeItem(USERNAME);
                localStorage.removeItem(IDENTITY);
                window.location.reload();
            }
            console.error("axiosApi error = ", error);
            return {
                httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
                errorMessage: error.response.data.reasonPhrase || error.response.data.message,
            };
        });
};
