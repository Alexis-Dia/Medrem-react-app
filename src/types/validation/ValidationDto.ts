export interface ValidationDto {
    object: {
        [key: string]: any
    };
    path: string;
    rule: ValidationRule;
}

export enum ValidationRule {
    VALUE_REQUIRED = "NonNullOrEmptyField",
	EMAIL = "Email",
	USERNAME = "Username",
	PASSWORD = "Password",
	ROLE_NAME = "RoleName",
	SETTING_NAME = "SettingName",
	EMPLOYEE = "Employee",
	SQL_SCRIPT = "SqlScript",
}
