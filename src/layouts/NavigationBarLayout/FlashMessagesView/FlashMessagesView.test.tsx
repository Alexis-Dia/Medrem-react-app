import React from "react";
import configureStore from "redux-mock-store";
import FlashMessagesView from "./FlashMessagesView";
import { getWrappedComponent, mountComponent, renderComponent, Wrapper } from "../../../utils/test-utils";
import { FlashMessage, FlashMessageType } from "../../../types/flash";
import FlashMessageView from "../FlashMessage/FlashMessage";
import { deleteFlashMessageById } from "../../../api/flash/flashActions";

const mockStore = configureStore();
const store = mockStore({
    flashMessages: [
        { id: 5, type: FlashMessageType.SUCCESS, text: "success-message" },
        { id: 11, type: FlashMessageType.ERROR, text: "error-message" }
    ]
});

const getWrappedComponentImpl = () => {
    const wrappers = [Wrapper.REDUX_PROVIDER];
    const component = <FlashMessagesView />
    return { component: getWrappedComponent(component, wrappers, {}, store), name: "FlashMessagesView" };
};

jest.mock("../FlashMessage/FlashMessage", () => "flash-message-mock");

describe("<FlashMessagesView />", () =>  {
    const { wrapper: wrapperWithInitialProps, component: componentWithInitialProps } = mountComponent(getWrappedComponentImpl());

    it("renders correctly", () => {
        const tree = renderComponent(getWrappedComponentImpl()).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should pass props to children", () => {
        const { flashMessages } = store.getState();

        flashMessages.forEach((flashMessage: FlashMessage, index: number) => {
            const flashMessageComponent = wrapperWithInitialProps.find(FlashMessageView).at(index);
            expect(flashMessageComponent.key()).toBe(String(flashMessage.id));

            const flashMessageComponentProps = flashMessageComponent.props();
            expect(flashMessageComponentProps.type).toBe(flashMessage.type);
            expect(flashMessageComponentProps.text).toBe(flashMessage.text);
        });
    });

    it("clicks on flash message close icon", () => {
        const flashMessageComponent = wrapperWithInitialProps.find(FlashMessageView).first();
        flashMessageComponent.props().onCloseClick();

        const { id } = store.getState().flashMessages[0];
        expect(store.getActions()).toContainEqual(deleteFlashMessageById(id));
    });
});