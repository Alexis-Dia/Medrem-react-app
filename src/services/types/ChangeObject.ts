export interface ChangeObject<T> {
    name: keyof T;
    value: T[keyof T];
}
