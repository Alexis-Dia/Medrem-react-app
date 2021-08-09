import { apiCallForLoggedUser } from "../../services/api/axiosApi";
import { PATH_METHOD_LANGUAGES_LOAD_ALL } from "../../properties/properties";

export const fetchLanguagesApi = () => apiCallForLoggedUser(PATH_METHOD_LANGUAGES_LOAD_ALL);

