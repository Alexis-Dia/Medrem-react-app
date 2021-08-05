import { ChangeObject } from "./ChangeObject";

export interface FieldModificationStrategy<T> {
    modify(source: T, changeObject: ChangeObject<T>): T;
}
