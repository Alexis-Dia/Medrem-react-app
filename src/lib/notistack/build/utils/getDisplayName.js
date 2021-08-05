"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function (obj) {
        return typeof obj;
    }
    : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

const _reactIs = require("react-is");

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
const getFunctionName = function getFunctionName(fn) {
    const match = (`${fn}`).match(fnNameMatchRegex);
    const name = match && match[1];
    return name || "";
};

/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */
const getFunctionComponentName = function getFunctionComponentName(Component) {
    const fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
};

const getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
};

/**
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */

exports.default = function (Component) {
    if (Component == null) {
        return undefined;
    }

    if (typeof Component === "string") {
        return Component;
    }

    if (typeof Component === "function") {
        return getFunctionComponentName(Component, "Component");
    }

    if ((typeof Component === "undefined" ? "undefined" : _typeof(Component)) === "object") {
        switch (Component.$$typeof) {
            case _reactIs.ForwardRef:
                return getWrappedName(Component, Component.render, "ForwardRef");
            default:
                return undefined;
        }
    }

    return undefined;
};
