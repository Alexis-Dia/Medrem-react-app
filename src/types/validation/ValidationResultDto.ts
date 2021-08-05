export interface ValidationResultDto {
    validation: boolean;
	message: string;
	path: string;
}

export interface ExternalEmployeeIdsValidationDto {
	validation: boolean;
	message: string;
	path?: string;
	arrPath?: Array<number>;
}
