export function getTreeArr(arr) {
    const newArr = [];
    let mainGeneratedId = 0;
    let generatedId = 100;
    arr.forEach((item) => {
        Array.isArray(newArr)&& newArr.push({
            "parentId": null,
            "id": mainGeneratedId,
            "name": item.name,
        });
        mainGeneratedId = mainGeneratedId + 1;
        let currentId = 0;
        if (Array.isArray(item.fields)&& item.fields.length > 0) {
            currentId = mainGeneratedId - 1;
        }
        Array.isArray(item.fields)&& item.fields.forEach((part) => {
            newArr.push({
                "parentId": currentId,
                "id": mainGeneratedId,
                "name": part.name,
                "parentName": item.name,
                "selectedByDefault": part.selectedByDefault,
            });
            mainGeneratedId = mainGeneratedId + 1;
            generatedId = generatedId + 1;
        });
    });
    generatedId = 0;
    return newArr;
}
