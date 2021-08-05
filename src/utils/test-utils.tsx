/* istanbul ignore file */

import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "material-ui/styles";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

export enum Wrapper {
    REDUX_PROVIDER,
    INTL_PROVIDER,
    THEME_PROVIDER
}

export const getWrappedComponent = (component: JSX.Element, wrappers: Array<Wrapper>, messages = {}, store = {}): JSX.Element => {
    let wrappedComponent = component;
    wrappers.forEach((wrapper) => {
        wrappedComponent = wrapComponent(wrappedComponent, wrapper, messages, store);
    });
    return wrappedComponent;
};

const wrapComponent = (component: JSX.Element, wrapper: Wrapper, messages: any, store: any) => {
    switch (wrapper) {
        case Wrapper.INTL_PROVIDER:
            return injectIntl(component, messages);
        case Wrapper.REDUX_PROVIDER:
            return injectStore(component, store);
        case Wrapper.THEME_PROVIDER:
            return injectStyles(component);
        default:
            return component;
    }
};

const injectStore = (node: JSX.Element, store: any): JSX.Element => (
    <Provider store={store}>
        {node}
    </Provider>
);

const injectIntl = (node: JSX.Element, messages: any): JSX.Element => (
    <IntlProvider locale="en" defaultLocale="en" messages={messages}>
        {node}
    </IntlProvider>
);

const injectStyles = (node: JSX.Element): JSX.Element => (
    <MuiThemeProvider>
        {node}
    </MuiThemeProvider>
);

export const findByAriaLabel = (component: any, ariaLabel: string) => component.find(`[aria-label='${ariaLabel}']`);

interface MountingParams {
    component: JSX.Element;
    name: string;
}

export const mountComponent = (params: MountingParams) => {
    const wrapper = mount(params.component);
    return {
        wrapper,
        component: wrapper.find(params.name),
    };
};

export const renderComponent = (params: MountingParams) => renderer.create(params.component);
