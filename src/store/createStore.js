import { applyMiddleware, compose, createStore as createReduxStore } from "redux";
import thunk from "redux-thunk";
import browserHistory from "../routes/history";
import rootReducer from "./reducers";
import { updateLocation } from "./location";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/rootSagas";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { logOut, loginFromToken } from "../../src/api/login/loginActions";

const createStore = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [thunk];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];
    let composeEnhancers = compose;

    // eslint-disable-next-line no-undef
    if (__DEV__) {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createReduxStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers,
        ),
    );
    store.asyncReducers = {};

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    store.unsubscribeHistory = browserHistory.listen(updateLocation(store));
    sagaMiddleware.run(mySaga);
    if (module.hot) {
        module.hot.accept("./reducers", () => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const reducers = require("./reducers").default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }

    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        setAuthorizationToken(token);
        store.dispatch(loginFromToken(token));
    } else {
        store.dispatch(logOut());
    }

    return store;
};

export default createStore;
