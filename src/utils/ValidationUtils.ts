import { ValidationRule } from "../types/validation";

class ValidationUtils {

    static getRuleByFieldName = (fieldName: string): ValidationRule => {
        switch (fieldName) {
            case "email":
                return ValidationRule.EMAIL;
            case "password":
                return ValidationRule.PASSWORD;
            case "username":
                return ValidationRule.USERNAME;
            case "firstName":
            case "lastName":
                return ValidationRule.VALUE_REQUIRED;
            case "externalEmployeeId":
                return ValidationRule.EMPLOYEE;
            default:
                return ValidationRule.VALUE_REQUIRED;
        }
    };

}

export default ValidationUtils;
