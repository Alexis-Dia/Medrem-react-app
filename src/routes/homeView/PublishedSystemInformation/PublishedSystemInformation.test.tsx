import React from "react"
import PublishedSystemInformation from "./PublishedSystemInformation"
import configureStore from "redux-mock-store";
import { getWrappedComponent, mountComponent, renderComponent, Wrapper } from "../../../utils/test-utils";

const systemInformation = {
    id: 5,
    informationType: "update",
    translations: [{ language: "EN", text: "en-text" }]
};

const mockStore = configureStore();
const initialStore = mockStore({
    locale: { lang: "EN" },
    system: {
        currentlyPublished: [systemInformation],
    },
});

const getWrappedComponentImpl = (store = initialStore) => {
    const wrappers = [Wrapper.REDUX_PROVIDER, Wrapper.INTL_PROVIDER];
    const component = <PublishedSystemInformation />;
    return { component: getWrappedComponent(component, wrappers, {}, store), name: "PublishedSystemInformation" };
};

describe("<PublishedSystemInformation />", () => {
    const { wrapper: wrapperWithInitialProps, component: componentWithInitialProps } = mountComponent(getWrappedComponentImpl());

    afterEach(() => {
        
    });

    it("renders correctly", () => {
        const tree = renderComponent(getWrappedComponentImpl());
        expect(tree).toMatchSnapshot();
    });
    
    it("renders with initial props", () => {
        const { locale, system } = initialStore.getState();
        expect(componentWithInitialProps.props()).toMatchObject({
            systemInformations: system.currentlyPublished,
            language: locale.lang,
        });
    });

    it("should pass props to children", () => {
        const list = wrapperWithInitialProps.find("ul");
        const listItems = list.find("li");
        expect(listItems).toHaveLength(1);

        const firstItem = listItems.first();
        expect(firstItem.key()).toBe(String(systemInformation.id));
        expect(firstItem.find("div").text()).toBe("update | en-text");
    });

    it("renders without system informations", () => {
        const store = mockStore({
            ...initialStore.getState(),
            system: {
                currentlyPublished: [],
            },
        });
        const { wrapper } = mountComponent(getWrappedComponentImpl(store));
        expect(wrapper.find("div")).toHaveLength(1);
    });
});