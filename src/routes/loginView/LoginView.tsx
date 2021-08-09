import React from "react";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { injectIntl, FormattedMessage, WrappedComponentProps } from "react-intl";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import browserHistory from "../history";
import { login } from "../../api/login/loginActions";
import "./LoginView.scss";
import { RootState } from "../../store/reducers";

interface Props extends WrappedComponentProps, PropsFromRedux {

}

interface State {
    username: string;
    password: string;
}

class LoginView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    componentWillUnmount() {
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.actions.login({
            username: this.state.username,
            password: this.state.password,
            errors: {
                invalidCredentials: this.props.intl.formatMessage({ id: "messageInvalidCredentials", defaultMessage: "Invalid credentials" }),
                serverIsUnreachable: this.props.intl.formatMessage({ id: "messageServerIsUnreachable", defaultMessage: "Server is unreachable" }),
            },
        });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        this.setState((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    };

    handleForgotPasswordClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        browserHistory.push("/password_reset");
    };

    render = () => {
        return (
            <div className="log-in-style-1">
                <div />
                <div>
                    <MuiThemeProvider>
                        <form onSubmit={this.handleSubmit}>
                            {this.props.auth.user.errors &&
                            <div className="alert alert-danger rounded-0">
                                {this.props.auth.user.errors}
                            </div>
                            }
                            <div className="form-group">
                                <label className="control-label">
                                    <FormattedMessage id="username" defaultMessage="Username" />
                                </label>
                                <input
                                    onChange={this.handleChange}
                                    name="username"
                                    className="form-control"
                                    placeholder={this.props.intl.formatMessage({ id: "username", defaultMessage: "username" })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="control-label">
                                    <FormattedMessage id="password" defaultMessage="Password" />
                                </label>
                                <input
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder={this.props.intl.formatMessage({ id: "password", defaultMessage: "password" })}
                                />
                            </div>
                            <p>
                                <a href="" onClick={this.handleForgotPasswordClick}>
                                    <FormattedMessage id="forgotPassword" defaultMessage="Forgot password?" />
                                </a>
                            </p>
                            <div className="form-group login-button-container">
                                <RaisedButton
                                    type="submit"
                                    label={<FormattedMessage id="login" defaultMessage="Login" />}
                                    backgroundColor="#ededed"
                                    fullWidth
                                    disabled={this.props.auth.isAuthenticated}
                                />
                            </div>
                        </form>
                    </MuiThemeProvider>
                </div>
                <div />
            </div>
        );
    };
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({
        login,
    }, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default injectIntl(connector(LoginView));
