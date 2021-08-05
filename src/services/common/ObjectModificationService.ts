import { cloneDeep } from "lodash";
import { ChangeObject } from "../types/ChangeObject";

class ObjectModificationService {

    public modify<T>(source: T, changeObject: ChangeObject<T>): T {

        const object = cloneDeep(source);
        const { name, value } = changeObject;
        object[name] = value;
        return object;
    }
}

export default new ObjectModificationService();
