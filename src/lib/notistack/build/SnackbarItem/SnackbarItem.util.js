"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports.getCollapseClasses = exports.getSnackbarClasses = exports.getTransitionDirection = undefined;

const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i]; for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    } return target;
};

const _classnames = require("classnames");

const _classnames2 = _interopRequireDefault(_classnames);

const _constants = require("../utils/constants");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    } return obj;
}

const DIRECTION = {
    right: "left",
    left: "right",
    bottom: "up",
    top: "down",
};

const getTransitionDirection = exports.getTransitionDirection = function getTransitionDirection(anchorOrigin) {
    if (anchorOrigin.horizontal !== "center") {
        return DIRECTION[anchorOrigin.horizontal];
    }
    return DIRECTION[anchorOrigin.vertical];
};

/**
 * Filter classes object and return keys that are allowed in material-ui snackbar classes prop
 */
const getSnackbarClasses = exports.getSnackbarClasses = function getSnackbarClasses(classes) {
    const snackbarMuiClasses = Object.keys(classes).filter((key) => {
        return _constants.allClasses.mui[key] !== undefined;
    })
        .reduce((obj, key) => {
            return { ...obj, ..._defineProperty({}, key, classes[key]) };
        }, {});

    return { ...snackbarMuiClasses, root: (0, _classnames2.default)(snackbarMuiClasses.root, classes.wrappedRoot) };
};

const getCollapseClasses = exports.getCollapseClasses = function getCollapseClasses(classes, dense) {
    return {
        container: classes.collapseContainer,
        wrapper: (0, _classnames2.default)(classes.collapseWrapper, _defineProperty({}, classes.collapseWrapperDense, dense)),
    };
};
