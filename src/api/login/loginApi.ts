import { apiCallForLoggedUser } from "../../services/api/axiosApi";
import { apiCall } from "../../services/api/httpsApi";
import { PATH_METHOD_AUTHENTICATE, PATH_HEALTH_CHECK } from "../../properties/properties";
import { UserPayload } from "./types";

export const loginApi = (user: UserPayload) => apiCall(PATH_METHOD_AUTHENTICATE, user);

export const healthCheckApi = () => apiCallForLoggedUser(PATH_HEALTH_CHECK);
