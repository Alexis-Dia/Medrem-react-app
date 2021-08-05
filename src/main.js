import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/createStore";
import "./styles/main.scss";
import axios from "axios";
import { gotError } from "./api/error/errorActions";
import AxiosService from "./services/api/AxiosService";

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__);

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById("root");

let render = () => {
    const App = require("./components/App").default;

    ReactDOM.render(
        <App store={store} />,
        MOUNT_NODE,
    );
};

const { dispatch } = store;
const interceptor =
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    dispatch(gotError(error.response));
    return Promise.reject(error);
});

AxiosService.addResponseInterceptor((response) => {
    return response;
}, (error) => {
    dispatch(gotError(error.response));
    return Promise.reject(error);
});

// Development Tools
// ------------------------------------
if (__DEV__) {
    if (module.hot) {
        const renderApp = render;
        const renderError = (error) => {
            const RedBox = require("redbox-react").default;

            ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
        };

        render = () => {
            try {
                renderApp();
            } catch (e) {
                renderError(e);
            }
        };

        // Setup hot module replacement
        module.hot.accept([
            "./components/App",
        ], () => setImmediate(() => {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        }),
        );
    }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) {
    render();
}
