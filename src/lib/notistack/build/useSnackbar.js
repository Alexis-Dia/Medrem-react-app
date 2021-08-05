"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});

const _react = require("react");

const _SnackbarContext = require("./SnackbarContext");

const _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
    return (0, _react.useContext)(_SnackbarContext2.default);
};
