import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import DateService from "../common/DateService";
import { APPLICATION_JSON, BEARER, FEATURES, HOSTNAME, IDENTITY, JSON_TYPE, JWT_TOKEN, PORT, ROLES, USERNAME, UTC_FORMAT } from "../../properties/properties";
import { getUrl } from "./axiosApi";
import { HttpStatus } from "../../types/common/HttpStatus";

class AxiosService {

    static instance: AxiosService = new AxiosService();

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create();
        this.api.interceptors.request.use((config): AxiosRequestConfig => {
            config.data = DateService.modifyDateToJSON(config.data, UTC_FORMAT);
            return config;
        });
        this.api.defaults.baseURL = getUrl(HOSTNAME, PORT, "");
        this.api.defaults.headers = { "Content-Type": APPLICATION_JSON };
        this.api.defaults.responseType = JSON_TYPE;
        this.api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
            config.headers = {
                ...config.headers,
                Authorization: BEARER + localStorage.jwtToken,
                Identity: localStorage.identity,
            };
            return config;
        });
        this.api.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
            if (response.status === HttpStatus.OK) {
                const token = response.headers["access-token"];
                localStorage.setItem(JWT_TOKEN, token);
            }

            if (response.status === HttpStatus.UNAUTHORIZED) {
                localStorage.removeItem(JWT_TOKEN);
                localStorage.removeItem(ROLES);
                localStorage.removeItem(FEATURES);
                localStorage.removeItem(USERNAME);
                localStorage.removeItem(IDENTITY);
            }

            return response;
        });
    }

    public addResponseInterceptor(onFulfilled?, onRejected?: (error: any) => any) {
        this.api.interceptors.response.use(onFulfilled, onRejected);
    }

    public post<T = any, R = AxiosResponse<T>>(path: string, body?: any): Promise<R> {
        return this.api.post<T, R>(path, body);
    }
}

export default AxiosService.instance;
