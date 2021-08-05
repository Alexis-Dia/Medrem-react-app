import { ActionType } from "typesafe-actions";
import { ErrorDto } from "../../types/error/ErrorDto";
import * as errorActions from "./errorActions";

export type ErrorState = ErrorDto | null;

export type ErrorAction = ActionType<typeof errorActions>;
