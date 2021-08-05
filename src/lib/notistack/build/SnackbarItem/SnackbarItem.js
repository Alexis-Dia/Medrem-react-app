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

const _createClass = function () {
    function defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) {
                descriptor.writable = true;
            } Object.defineProperty(target, descriptor.key, descriptor);
        }
    } return function (Constructor, protoProps, staticProps) {
        if (protoProps) {
            defineProperties(Constructor.prototype, protoProps);
        } if (staticProps) {
            defineProperties(Constructor, staticProps);
        } return Constructor;
    };
}();

const _react = require("react");

const _react2 = _interopRequireDefault(_react);

const _classnames = require("classnames");

const _classnames2 = _interopRequireDefault(_classnames);

const _propTypes = require("prop-types");

const _propTypes2 = _interopRequireDefault(_propTypes);

const _styles = require("material-ui-old-core/styles");

const _Snackbar = require("material-ui-old-core/Snackbar");

const _Snackbar2 = _interopRequireDefault(_Snackbar);

const _Collapse = require("material-ui-old-core/Collapse");

const _Collapse2 = _interopRequireDefault(_Collapse);

const _SnackbarContent = require("material-ui-old-core/SnackbarContent");

const _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

const _SnackbarItem = require("./SnackbarItem.util");

const _SnackbarItem2 = require("./SnackbarItem.styles");

const _SnackbarItem3 = _interopRequireDefault(_SnackbarItem2);

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

function _objectWithoutProperties(obj, keys) {
    const target = {}; for (const i in obj) {
        if (keys.indexOf(i) >= 0) {
            continue;
        } if (!Object.prototype.hasOwnProperty.call(obj, i)) {
            continue;
        } target[i] = obj[i];
    } return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    } return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`);
    } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
}

const SnackbarItem = function (_Component) {
    _inherits(SnackbarItem, _Component);

    function SnackbarItem() {
        let _ref;

        let _temp, _this, _ret;

        _classCallCheck(this, SnackbarItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SnackbarItem.__proto__ || Object.getPrototypeOf(SnackbarItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            collapsed: true,
        }, _this.componentWillUnmount = function () {
            clearTimeout(_this.timeout);
        }, _this.handleClose = function (key) {
            return function (event, reason) {
                const { snack } = _this.props;

                if (snack.onClose) {
                    snack.onClose(event, reason, key);
                }
                _this.props.onClose(event, reason, key);
            };
        }, _this.handleEntered = function (key) {
            return function (node, isAppearing) {
                const { snack } = _this.props;

                if (snack.onEntered) {
                    snack.onEntered(node, isAppearing, key);
                }
                _this.props.onEntered(node, isAppearing, key);

                if (snack.requestClose) {
                    _this.handleClose(key)(null, _constants.REASONS.MAXSNACK);
                }
            };
        }, _this.handleExited = function (key) {
            return function (event) {
                const _this$props = _this.props,
                    { onExited } = _this$props,
                    singleOnExited = _this$props.snack.onExited;

                if (singleOnExited) {
                    singleOnExited(event, key);
                }
                onExited(event, key);
            };
        }, _this.handleExitedScreen = function () {
            _this.timeout = setTimeout(() => {
                _this.setState((_ref2) => {
                    const { collapsed } = _ref2;
                    return { collapsed: !collapsed };
                });
            }, 125);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SnackbarItem, [{
        key: "render",
        value: function render() {
            const _props = this.props,
                { classes } = _props,
                { action } = _props,
                { content } = _props,
                _props$ContentProps = _props.ContentProps,
                ContentProps = _props$ContentProps === undefined ? {} : _props$ContentProps,
                { hideIconVariant } = _props,
                { preventDuplicate } = _props,
                { iconVariant } = _props,
                { snack } = _props,
                { dense } = _props,
                _props$TransitionProp = _props.TransitionProps,
                otherTransitionProps = _props$TransitionProp === undefined ? {} : _props$TransitionProp,
                other = _objectWithoutProperties(_props, ["classes", "action", "content", "ContentProps", "hideIconVariant", "preventDuplicate", "iconVariant", "snack", "dense", "TransitionProps"]);

            const contentAction = ContentProps.action,
                { className } = ContentProps,
                otherContentProps = _objectWithoutProperties(ContentProps, ["action", "className"]);

            let { key } = snack,
                { persist } = snack,
                { variant } = snack,
                singleContent = snack.content,
                singleAction = snack.action,
                _snack$ContentProps = snack.ContentProps,
                singleContentProps = _snack$ContentProps === undefined ? {} : _snack$ContentProps,
                { anchorOrigin } = snack,
                { requestClose } = snack,
                { entered } = snack,
                _snack$TransitionProp = snack.TransitionProps,
                singleTransitionProps = _snack$TransitionProp === undefined ? {} : _snack$TransitionProp,
                singleSnackProps = _objectWithoutProperties(snack, ["key", "persist", "variant", "content", "action", "ContentProps", "anchorOrigin", "requestClose", "entered", "TransitionProps"]);

            const icon = iconVariant[variant];

            const contentProps = { ...otherContentProps, ...singleContentProps, action: singleAction || singleContentProps.action || contentAction || action };

            const transitionProps = { direction: (0, _SnackbarItem.getTransitionDirection)(anchorOrigin), ...otherTransitionProps, ...singleTransitionProps, onExited: this.handleExitedScreen };

            const ariaDescribedby = contentProps["aria-describedby"] || "client-snackbar";

            let finalAction = contentProps.action;
            if (typeof finalAction === "function") {
                finalAction = contentProps.action(key);
            }

            let snackContent = singleContent || content;
            if (snackContent && typeof snackContent === "function") {
                snackContent = snackContent(key, snack.message);
            }

            return _react2.default.createElement(
                _Collapse2.default,
                {
                    unmountOnExit: true,
                    timeout: 175,
                    "in": this.state.collapsed,
                    classes: (0, _SnackbarItem.getCollapseClasses)(classes, dense),
                    onExited: this.handleExited(key),
                },
                _react2.default.createElement(
                    _Snackbar2.default,
                    { ...other, ...singleSnackProps, open: snack.open,
                        anchorOrigin,
                        TransitionProps: transitionProps,
                        classes: (0, _SnackbarItem.getSnackbarClasses)(classes),
                        onClose: this.handleClose(key),
                        onEntered: this.handleEntered(key), ...this.unusedCallbacks },
                    snackContent || _react2.default.createElement(_SnackbarContent2.default, { className: (0, _classnames2.default)(classes.base, classes[`variant${(0, _constants.capitalise)(variant)}`], !hideIconVariant && icon ? classes.lessPadding : null, className), ...contentProps, "aria-describedby": ariaDescribedby,
                        message: _react2.default.createElement(
                            "span",
                            { id: ariaDescribedby, className: classes.message },
                            !hideIconVariant ? icon : null,
                            snack.message,
                        ),
                        action: finalAction }),
                ),
            );
        },
    }, {
        key: "unusedCallbacks",
        get: function get() {
            const _this2 = this;

            return ["onEnter", "onEntering", "onExit", "onExiting"].reduce((acc, cbName) => {
                return { ...acc, ..._defineProperty({}, cbName, function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    const { snack } = _this2.props;

                    if (typeof snack[cbName] === "function") {
                        snack[cbName].apply(snack, args.concat([snack.key]));
                    }
                    if (typeof _this2.props[cbName] === "function") {
                        let _props2;

                        (_props2 = _this2.props)[cbName].apply(_props2, args.concat([snack.key]));
                    }
                }) };
            }, {});
        },
    }]);

    return SnackbarItem;
}(_react.Component);

process.env.NODE_ENV !== "production"
    ? SnackbarItem.propTypes = {
        classes: _propTypes2.default.object.isRequired,
        snack: _propTypes2.default.shape({
            message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
            variant: _propTypes2.default.oneOf(["default", "error", "success", "warning", "info"]),
            key: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
            open: _propTypes2.default.bool.isRequired,
            requestClose: _propTypes2.default.bool.isRequired,
            entered: _propTypes2.default.bool.isRequired,
        }).isRequired,
        iconVariant: _propTypes2.default.shape({
            success: _propTypes2.default.any.isRequired,
            warning: _propTypes2.default.any.isRequired,
            error: _propTypes2.default.any.isRequired,
            info: _propTypes2.default.any.isRequired,
        }).isRequired,
        hideIconVariant: _propTypes2.default.bool.isRequired,
        preventDuplicate: _propTypes2.default.bool.isRequired,
        dense: _propTypes2.default.bool.isRequired,
        onClose: _propTypes2.default.func.isRequired,
        onExited: _propTypes2.default.func.isRequired,
        onEntered: _propTypes2.default.func.isRequired,
    }
    : void 0;

exports.default = (0, _styles.withStyles)(_SnackbarItem3.default)(SnackbarItem);
