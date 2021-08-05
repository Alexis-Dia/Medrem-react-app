import DateService from "./DateService";
import moment from "moment";
import { UTC_FORMAT } from "../../properties/properties";

it('should modify toJSON in Date objects', function () {

    const object = {
        strValue1Level: "some value",
        objValue2Level: {
            strValue2Level: "2020.02.02 00:00",
            dateValue2Level: new Date(),
            objValue2Level: {
                dateValue3Level: new Date(),
                strValue3Level: "someStr",
                numberValue3Level: 5
            }
        }
    };

    const modifiedObject = DateService.modifyDateToJSON(object, UTC_FORMAT);

    expect(object !== modifiedObject);
    expect(JSON.stringify(object) === JSON.stringify(modifiedObject));
    const expectedDate2LevelJson = moment(object.objValue2Level.dateValue2Level).format(UTC_FORMAT);
    expect(JSON.stringify(modifiedObject.objValue2Level.dateValue2Level)).toEqual(`"${expectedDate2LevelJson}"`);
    expect(modifiedObject.objValue2Level.dateValue2Level.toJSON()).toEqual(expectedDate2LevelJson);

    const expectedDate3LevelJson = moment(object.objValue2Level.objValue2Level.dateValue3Level).format(UTC_FORMAT);
    expect(JSON.stringify(modifiedObject.objValue2Level.objValue2Level.dateValue3Level)).toEqual(`"${expectedDate3LevelJson}"`);
    expect(modifiedObject.objValue2Level.objValue2Level.dateValue3Level.toJSON()).toEqual(expectedDate3LevelJson);
});
