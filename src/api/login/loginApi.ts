import { apiCall } from "../../services/api/axiosApi";
import { PATH_METHOD_AUTHENTICATE } from "../../properties/properties";
import { UserPayload } from "./types";

export const loginApi = (user: UserPayload) => apiCall(PATH_METHOD_AUTHENTICATE, user);