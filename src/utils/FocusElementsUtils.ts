class FocusElementsUtils {

    private static getComboBox = (element: any): HTMLElement | null => {

        for (const childNode of element.childNodes) {
            let attribute;
            if (childNode instanceof Element) {
                attribute = childNode.getAttribute("aria-haspopup");
            }
            if (attribute) {
                return childNode;
            } else {
                const comboBox = FocusElementsUtils.getComboBox(childNode);
                if (comboBox) {
                    return comboBox;
                }
            }
        }
        return null;
    }

    private static getInputOrTextarea = (element: any): HTMLInputElement | null => {

        const inputs = element.getElementsByTagName("input");
        if (inputs && inputs.length > 0) {
            return inputs[0];
        }
        const textareas = element.getElementsByTagName("textarea");
        if (textareas && textareas.length > 0) {
            for (const textarea of textareas) {
                if (textarea.getAttribute("aria-invalid")) {
                    return textarea;
                }
            }
            return textareas[textareas.length - 1];
        }
        return null;
    }

    private static getButton = (element: any): HTMLElement | null => {

        const buttons = element.getElementsByTagName("button");
        if (!buttons) {
            return null;
        }

        return buttons[0];
    }

}

export default FocusElementsUtils;
