"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});

const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i]; for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    } return target;
};

const _react = require("react");

const _react2 = _interopRequireDefault(_react);

const _hoistNonReactStatics = require("hoist-non-react-statics");

const _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

const _getDisplayName = require("./utils/getDisplayName");

const _getDisplayName2 = _interopRequireDefault(_getDisplayName);

const _SnackbarContext = require("./SnackbarContext");

const _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const withSnackbar = function withSnackbar(Component) {
    const WrappedComponent = _react2.default.forwardRef((props, ref) => {
        return _react2.default.createElement(
            _SnackbarContext2.default.Consumer,
            null,
            (context) => {
                return _react2.default.createElement(Component, { ...props, ref,
                    enqueueSnackbar: context.enqueueSnackbar,
                    closeSnackbar: context.closeSnackbar });
            },
        );
    });

    if (process.env.NODE_ENV !== "production") {
        WrappedComponent.displayName = `WithSnackbar(${(0, _getDisplayName2.default)(Component)})`;
    }

    (0, _hoistNonReactStatics2.default)(WrappedComponent, Component);

    return WrappedComponent;
};

exports.default = withSnackbar;
