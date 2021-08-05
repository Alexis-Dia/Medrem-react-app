"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});

const _slicedToArray = function () {
    function sliceIterator(arr, i) {
        const _arr = []; let _n = true; let _d = false; let _e; try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value); if (i && _arr.length === i) {
                    break;
                }
            }
        } catch (err) {
            _d = true; _e = err;
        } finally {
            try {
                if (!_n && _i.return) {
                    _i.return();
                }
            } finally {
                if (_d) {
                    throw _e;
                }
            }
        } return _arr;
    } return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

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

const _reactDom = require("react-dom");

const _propTypes = require("prop-types");

const _propTypes2 = _interopRequireDefault(_propTypes);

const _Slide = require("material-ui-old-core/Slide");

const _Slide2 = _interopRequireDefault(_Slide);

const _SnackbarContext = require("./SnackbarContext");

const _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

const _constants = require("./utils/constants");

const _SnackbarItem = require("./SnackbarItem");

const _SnackbarItem2 = _interopRequireDefault(_SnackbarItem);

const _SnackbarContainer = require("./SnackbarContainer");

const _SnackbarContainer2 = _interopRequireDefault(_SnackbarContainer);

const _warning = require("./utils/warning");

const _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        } return arr2;
    } else {
        return Array.from(arr);
    }
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

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    } return obj;
}

/**
 * Omit SnackbarContainer class keys that are not needed for SnakcbarItem
 */
const getClasses = function getClasses(classes) {
    return Object.keys(classes).filter((key) => {
        return !_constants.allClasses.container[key];
    })
        .reduce((obj, key) => {
            return { ...obj, ..._defineProperty({}, key, classes[key]) };
        }, {});
};

const SnackbarProvider = function (_Component) {
    _inherits(SnackbarProvider, _Component);

    function SnackbarProvider(props) {
        _classCallCheck(this, SnackbarProvider);

        const _this = _possibleConstructorReturn(this, (SnackbarProvider.__proto__ || Object.getPrototypeOf(SnackbarProvider)).call(this, props));

        _this.enqueueSnackbar = function (message) {
            const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            let { key } = _ref,
                { preventDuplicate } = _ref,
                options = _objectWithoutProperties(_ref, ["key", "preventDuplicate"]);

            const userSpecifiedKey = key || key === 0;
            const id = userSpecifiedKey ? key : new Date().getTime() + Math.random();
            const snack = { key: id, ...options, message,
                open: true,
                entered: false,
                requestClose: false,
                variant: options.variant || _this.props.variant,
                anchorOrigin: options.anchorOrigin || _this.props.anchorOrigin };

            if (options.persist) {
                snack.autoHideDuration = undefined;
            }

            _this.setState((state) => {
                if (preventDuplicate === undefined && _this.props.preventDuplicate || preventDuplicate) {
                    const compareFunction = function compareFunction(item) {
                        return userSpecifiedKey ? item.key === key : item.message === message;
                    };

                    const inQueue = state.queue.findIndex(compareFunction) > -1;
                    const inView = state.snacks.findIndex(compareFunction) > -1;
                    if (inQueue || inView) {
                        return state;
                    }
                }

                return _this.handleDisplaySnack({ ...state, queue: [].concat(_toConsumableArray(state.queue), [snack]) });
            });

            return id;
        };

        _this.handleDisplaySnack = function (state) {
            const { snacks } = state;

            if (snacks.length >= _this.props.maxSnack) {
                return _this.handleDismissOldest(state);
            }
            return _this.processQueue(state);
        };

        _this.processQueue = function (state) {
            let { queue } = state,
                { snacks } = state;

            if (queue.length > 0) {
                return { ...state, snacks: [].concat(_toConsumableArray(snacks), [queue[0]]),
                    queue: queue.slice(1, queue.length) };
            }
            return state;
        };

        _this.handleDismissOldest = function (state) {
            if (state.snacks.some((item) => {
                return !item.open || item.requestClose;
            })) {
                return state;
            }

            let popped = false;
            let ignore = false;

            const persistentCount = state.snacks.reduce((acc, current) => {
                return acc + (current.open && current.persist ? 1 : 0);
            }, 0);

            if (persistentCount === _this.props.maxSnack) {
                (0, _warning2.default)(_constants.MESSAGES.NO_PERSIST_ALL);
                ignore = true;
            }

            const snacks = state.snacks.map((item) => {
                if (!popped && (!item.persist || ignore)) {
                    popped = true;

                    if (!item.entered) {
                        return { ...item, requestClose: true };
                    }

                    if (item.onClose) {
                        item.onClose(null, _constants.REASONS.MAXSNACK, item.key);
                    }
                    if (_this.props.onClose) {
                        _this.props.onClose(null, _constants.REASONS.MAXSNACK, item.key);
                    }

                    return { ...item, open: false };
                }

                return { ...item };
            });

            return { ...state, snacks };
        };

        _this.handleEnteredSnack = function (node, isAppearing, key) {
            if (_this.props.onEntered) {
                _this.props.onEntered(node, isAppearing, key);
            }

            _this.setState((_ref2) => {
                const { snacks } = _ref2;
                return {
                    snacks: snacks.map((item) => {
                        return item.key === key ? ({ ...item, entered: true }) : ({ ...item });
                    }),
                };
            });
        };

        _this.handleCloseSnack = function (event, reason, key) {
            if (_this.props.onClose) {
                _this.props.onClose(event, reason, key);
            }

            if (reason === _constants.REASONS.CLICKAWAY) {
                return;
            }
            const shouldCloseAll = key === undefined;

            _this.setState((_ref3) => {
                let { snacks } = _ref3,
                    { queue } = _ref3;
                return {
                    snacks: snacks.map((item) => {
                        if (!shouldCloseAll && item.key !== key) {
                            return { ...item };
                        }

                        return item.entered ? ({ ...item, open: false }) : ({ ...item, requestClose: true });
                    }),
                    queue: queue.filter((item) => {
                        return item.key !== key;
                    }), // eslint-disable-line react/no-unused-state
                };
            });
        };

        _this.closeSnackbar = function (key) {
            // call individual snackbar onClose callback passed through options parameter
            const toBeClosed = _this.state.snacks.find((item) => {
                return item.key === key;
            });
            if (toBeClosed && toBeClosed.onClose) {
                toBeClosed.onClose(null, _constants.REASONS.INSTRUCTED, key);
            }

            _this.handleCloseSnack(null, _constants.REASONS.INSTRUCTED, key);
        };

        _this.handleExitedSnack = function (event, key) {
            _this.setState((state) => {
                const newState = _this.processQueue({ ...state, snacks: state.snacks.filter((item) => {
                    return item.key !== key;
                }) });

                if (newState.queue.length === 0) {
                    return newState;
                }

                return _this.handleDismissOldest(newState);
            });

            if (_this.props.onExited) {
                _this.props.onExited(event, key);
            }
        };

        _this.state = {
            snacks: [],
            queue: [], // eslint-disable-line react/no-unused-state
            contextValue: {
                enqueueSnackbar: _this.enqueueSnackbar,
                closeSnackbar: _this.closeSnackbar,
            },
        };
        return _this;
    }

    /**
     * Adds a new snackbar to the queue to be presented.
     * @param {string} message - text of the notification
     * @param {object} options - additional options for the snackbar we want to enqueue.
     * We can pass Material-ui Snackbar props for individual customisation.
     * @param {string} options.key
     * @param {string} options.variant - type of the snackbar. default value is 'default'.
     * can be: (default, success, error, warning, info)
     * @param {bool} options.persist
     * @param {bool} options.preventDuplicate
     * @returns generated or user defined key referencing the new snackbar or null
     */

    /**
     * Reducer: Display snack if there's space for it. Otherwise, immediately
     * begin dismissing the oldest message to start showing the new one.
     */

    /**
     * Reducer: Display items (notifications) in the queue if there's space for them.
     */

    /**
     * Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
     * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
     *
     * Note 1: If there is already a message leaving the screen, no new messages are dismissed.
     * Note 2: If the oldest message has not yet entered the screen, only a request to close the
     *         snackbar is made. Once it entered the screen, it will be immediately dismissed.
     */

    /**
     * Set the entered state of the snackbar with the given key.
     */

    /**
     * Hide a snackbar after its timeout.
     * @param {object} event - The event source of the callback
     * @param {string} reason - can be timeout, clickaway
     * @param {number} key - id of the snackbar we want to hide
     */

    /**
     * Close snackbar with the given key
     * @param {number} key - id of the snackbar we want to hide
     */

    /**
     * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after leaving animation is done, this method
     * gets called. We remove the hidden snackbar from state and then display notifications
     * waiting in the queue (if any). If after this process the queue is not empty, the
     * oldest message is dismissed.
     * @param {number} key - id of the snackbar we want to remove
     * @param {object} event - The event source of the callback
     */

    _createClass(SnackbarProvider, [{
        key: "render",
        value: function render() {
            const _this2 = this;

            const _props = this.props,
                { classes } = _props,
                { children } = _props,
                { maxSnack } = _props,
                { dense } = _props,
                { variant } = _props,
                { domRoot } = _props,
                props = _objectWithoutProperties(_props, ["classes", "children", "maxSnack", "dense", "variant", "domRoot"]);

            const { contextValue } = this.state;

            const categ = this.state.snacks.reduce((acc, current) => {
                const category = (0, _constants.originKeyExtractor)(current.anchorOrigin);
                const existingOfCategory = acc[category] || [];
                return { ...acc, ..._defineProperty({}, category, [].concat(_toConsumableArray(existingOfCategory), [current])) };
            }, {});

            const iconVariant = { ..._constants.defaultIconVariant, ...this.props.iconVariant };

            const snackbars = Object.entries(categ).map((_ref4) => {
                const _ref5 = _slicedToArray(_ref4, 2),
                    origin = _ref5[0],
                    snacks = _ref5[1];

                return _react2.default.createElement(
                    _SnackbarContainer2.default,
                    {
                        key: origin,
                        dense,
                        anchorOrigin: snacks[0].anchorOrigin,
                        className: classes[`containerAnchorOrigin${origin}`],
                    },
                    snacks.map((snack) => {
                        return _react2.default.createElement(_SnackbarItem2.default, { ...props, key: snack.key,
                            dense,
                            snack,
                            iconVariant,
                            classes: getClasses(classes),
                            onClose: _this2.handleCloseSnack,
                            onExited: _this2.handleExitedSnack,
                            onEntered: _this2.handleEnteredSnack });
                    }),
                );
            });

            return _react2.default.createElement(
                _SnackbarContext2.default.Provider,
                { value: contextValue },
                children,
                domRoot ? (0, _reactDom.createPortal)(snackbars, domRoot) : snackbars,
            );
        },
    }]);

    return SnackbarProvider;
}(_react.Component);

// polyfill for Node
// eslint-disable-next-line

var Element = typeof Element === "undefined" ? function () {} : Element;

process.env.NODE_ENV !== "production" ? SnackbarProvider.propTypes = {
    /**
     * Most of the time, this is your App. every component from this point onward
     * will be able to show snackbars.
     */
    children: _propTypes2.default.node.isRequired,
    /**
     * Override or extend the styles applied to the container component or Snackbars.
     */
    classes: _propTypes2.default.object,
    /**
     * Maximum snackbars that can be stacked on top of one another.
     */
    maxSnack: _propTypes2.default.number,
    /**
     * Denser margins for snackbars. Recommended to be used on mobile devices.
     */
    dense: _propTypes2.default.bool,
    /**
     * Used to easily display different variant of snackbars. When passed to `SnackbarProvider`
     * all snackbars inherit the `variant`, unless you override it in `enqueueSnackbar` options.
     */
    variant: _propTypes2.default.oneOf(["default", "error", "success", "warning", "info"]),
    /**
     * Ignores displaying multiple snackbars with the same `message`
     */
    preventDuplicate: _propTypes2.default.bool,
    /**
     * Hides iconVariant if set to `true`.
     */
    hideIconVariant: _propTypes2.default.bool,
    /**
     * Little icon that is displayed at left corner of a snackbar.
     */
    iconVariant: _propTypes2.default.shape({
        /**
         * Icon displayed when variant of a snackbar is set to `success`.
         */
        success: _propTypes2.default.any,
        /**
         * Icon displayed when variant of a snackbar is set to `warning`.
         */
        warning: _propTypes2.default.any,
        /**
         * Icon displayed when variant of a snackbar is set to `error`.
         */
        error: _propTypes2.default.any,
        /**
         * Icon displayed when variant of a snackbar is set to `info`.
         */
        info: _propTypes2.default.any,
    }),
    /**
     * Callback used for getting action(s). actions are mostly buttons displayed in Snackbar.
     * @param {string|number} key key of a snackbar
     */
    action: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
    /**
     * Replace the snackbar. Callback used for displaying entirely customized snackbar.
     * @param {string|number} key key of a snackbar
     */
    content: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
    /**
     * The anchor of the `Snackbar`.
     */
    anchorOrigin: _propTypes2.default.shape({
        horizontal: _propTypes2.default.oneOf(["left", "center", "right"]).isRequired,
        vertical: _propTypes2.default.oneOf(["top", "bottom"]).isRequired,
    }),
    /**
     * The number of milliseconds to wait before automatically calling the
     * `onClose` function. By default snackbars get closed after 5000 milliseconds.
     * Set autoHideDuration to 'undefined' if you don't want snackbars to automatically close.
     * Alternatively pass `persist: true` in the options parameter of enqueueSnackbar.
     */
    autoHideDuration: _propTypes2.default.number,
    /**
     * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
     */
    disableWindowBlurListener: _propTypes2.default.bool,
    /**
     * Callback fired when the component is gets closed.
     * The `reason` parameter can optionally be used to control the response to `onClose`.
     *
     * @param {object} event The event source of the callback
     * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
     *  or: `"maxsnack"` (snackbar was closed because `maxSnack` has reached) or: `"instructed"`
     * (snackbar was closed programmatically)
     * @param {string|number} key key of a Snackbar
     */
    onClose: _propTypes2.default.func,
    /**
     * Callback fired before the transition is entering.
     */
    onEnter: _propTypes2.default.func,
    /**
     * Callback fired when the transition has entered.
     */
    onEntered: _propTypes2.default.func,
    /**
     * Callback fired when the transition is entering.
     */
    onEntering: _propTypes2.default.func,
    /**
     * Callback fired before the transition is exiting.
     */
    onExit: _propTypes2.default.func,
    /**
     * Callback fired when the transition has exited.
     */
    onExited: _propTypes2.default.func,
    /**
     * Callback fired when the transition is exiting.
     */
    onExiting: _propTypes2.default.func,
    /**
     * The number of milliseconds to wait before dismissing after user interaction.
     * If `autoHideDuration` property isn't specified, it does nothing.
     * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
     * we default to `autoHideDuration / 2` ms.
     */
    resumeHideDuration: _propTypes2.default.number,
    /**
     * The component used for the transition.
     */
    TransitionComponent: _propTypes2.default.elementType,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })]),
    /**
     * Valid and exist HTML Node element, used to target `ReactDOM.createPortal`
     */
    domRoot: _propTypes2.default.instanceOf(Element),
} : void 0;

SnackbarProvider.defaultProps = {
    maxSnack: 3,
    dense: false,
    variant: "default",
    preventDuplicate: false,
    hideIconVariant: false,
    classes: {},
    iconVariant: {},
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
    },
    autoHideDuration: 5000,
    TransitionComponent: _Slide2.default,
};

exports.default = SnackbarProvider;
