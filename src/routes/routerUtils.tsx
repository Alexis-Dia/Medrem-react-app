/* eslint-disable react/no-multi-comp */
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RENDER_DELAY } from "../properties/properties";
import { RootState } from "../store/reducers";
import HomeView from "./homeView/HomeView/HomeView";
import LoginView from "./loginView/LoginView";

export const withAuth = (WrappedComponent: any, delayed = true) => {

    interface Props extends PropsFromRedux {
        match: {
            params: any;
        };
    }

    interface State {
        hidden: boolean;
    }

    interface Props extends PropsFromRedux {
        match: {
            params: any;
        };
    }

    interface State {
        hidden: boolean;
    }

    class Authentication extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.state = {
                hidden: delayed,
            };
        }

        componentWillMount() {
            if (delayed) {
                setTimeout(() => {
                    this.setState({ hidden: false });
                }, RENDER_DELAY);
            }
        }

        render = () => {
            const { isAuthenticated } = this.props.auth;

            return (this.state.hidden
                    ? null
                    : isAuthenticated ? <WrappedComponent {...this.props.match.params} /> : <LoginView />
            );
        };
    }

    const mapStateToProps = (state: RootState) => ({
        auth: state.auth,
    });

    const connector = connect(mapStateToProps);

    type PropsFromRedux = ConnectedProps<typeof connector>;

    return connector(Authentication);
};

/*export const withFeatures = (WrappedComponent: any, features: Array<string>) => {

    return function Authorization (props: any) {
        //const userFeatures = localStorage.getItem("features");
        //const hasPermission = CommonUtils.ifFeaturesExists(userFeatures, features);

        //return hasPermission ? <WrappedComponent {...props} /> : <HomeView />;
        return <HomeView />;
    };
};*/
