import React from "react"
import HomeView from "./HomeView"
import configureStore from "redux-mock-store";
import { getWrappedComponent, mountComponent, renderComponent, Wrapper } from "../../../utils/test-utils";
import history from "../../history";
import { CommonUtils } from "../../../utils";

const mockStore = configureStore();
const store = mockStore({});

const getWrappedComponentImpl = () => {
    const wrappers = [Wrapper.REDUX_PROVIDER, Wrapper.INTL_PROVIDER];
    const component = <HomeView />;
    return { component: getWrappedComponent(component, wrappers, {}, store), name: "HomeView" };
};

const getFeaturesMock = CommonUtils.ifFeaturesExists = jest.fn().mockImplementation(() => true);

jest.mock("material-ui-old-core/Grid", () => "grid-mock");
jest.mock("material-ui-old-core/Paper", () => "paper-mock");
jest.mock("../PublishedSystemInformation/PublishedSystemInformation", () => "published-system-info-mock");
jest.mock("../../history", () => ({
    push: jest.fn(),
}));

describe("<HomeView />", () => {
    const { wrapper: wrapperWithInitialProps } = mountComponent(getWrappedComponentImpl());

    afterEach(() => {
        getFeaturesMock.mockClear();
        //@ts-ignore
        history.push.mockClear();
    });

    it("renders correctly", () => {
        const tree = renderComponent(getWrappedComponentImpl());
        expect(tree).toMatchSnapshot();
    });

    describe("actions simulation", () => {
        const gridItems = wrapperWithInitialProps.findWhere((grid) => grid.props().item === true && !grid.props().xs);
        expect(gridItems).toHaveLength(4);

        it("clicks on kpi item", () => {
            gridItems.at(0).props().onClick();
            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toBeCalledWith("/kpi");
        });

        it("clicks on users item", () => {
            gridItems.at(1).props().onClick();
            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toBeCalledWith("/users");
        });

        it("clicks on offers item", () => {
            gridItems.at(2).props().onClick();
            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toBeCalledWith("/documents/");
        });

        it("clicks on permissions item", () => {
            gridItems.at(3).props().onClick();
            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toBeCalledWith("/roles");
        });
    });
});
