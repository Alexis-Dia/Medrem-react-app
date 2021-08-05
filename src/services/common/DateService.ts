import { cloneDeep } from "lodash";
import moment from "moment";
import { UTC_FORMAT } from "../../properties/properties";

class DateService {

    public modifyDateToJSON<T>(source: T, targetFormat: string = UTC_FORMAT): T {
        if (source) {
            const object = cloneDeep(source);
            this.modify(object, targetFormat);
            return object;
        }
        return source;
    }

    private modify(object: any, targetFormat: string) {
        Object.keys(object).forEach((key) => {

            const value = object[key];
            if (value) {
                if (value instanceof Date) {
                    value.toJSON = function() {
                        return moment(this).format(targetFormat);
                    };
                } else if (typeof value === "object") {
                    this.modify(value, targetFormat);
                }
            }
        });
    }
}

export default new DateService();
