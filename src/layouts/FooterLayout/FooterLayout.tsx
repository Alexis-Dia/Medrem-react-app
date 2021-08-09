/* eslint-disable react/no-did-mount-set-state */
import React from "react";
import { Language } from "../../types/common/Language";
import { connect, ConnectedProps } from "react-redux";
import { WrappedComponentProps, injectIntl } from "react-intl";
import { withSnackbar } from "notistack";
import { bindActionCreators } from "redux";
import {
    EN,
    I18,
    TIME_OF_LOG_IN_POP_UP,
} from "../../properties/properties";
import { changeLocale } from "../../api/lang/localeActions";
import { onCloseClicked, logOut } from "../../api/login/loginActions";
import { fetchLanguages } from "../../api/common/commonActions";
import { addAutoRemovableFlashMessage, deleteAllFlashMessages } from "../../api/flash/flashActions";
import { FlashMessageType } from "../../types/flash";
import { RootState } from "../../store/reducers";
import "./FooterLayout.scss";
import { WithSnackbarProps } from "../../lib/notistack/build";

const REACT_INTL_DELAY = 1000;

interface Props extends PropsFromRedux, WrappedComponentProps, WithSnackbarProps {

}

interface State {
    isMenuOpen: boolean;
    isOffersItemOpen: boolean;
    isSqlItemOpen: boolean;
    isSystemInformationModalOpen: boolean;
    language: string;
}

class FooterLayout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isOffersItemOpen: false,
            isSqlItemOpen: false,
            isSystemInformationModalOpen: false,
            language: 'EN',
        };
        this.onUnload = this.onUnload.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.actions.fetchLanguages();
            this.props.actions.changeLocale(this.state.language);
        }

        window.addEventListener("beforeunload", this.onUnload);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);
    }

    componentWillReceiveProps(nextProps: Props) {
        if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
            this.props.actions.fetchLanguages();
            this.setLanguage(nextProps.auth.user.language!, true);

            setTimeout(() => {
                const successfulLoginText = this.props.intl.formatMessage({
                    id: "messageYouLogInSuccessfuly",
                    defaultMessage: "messageYouLogInSuccessfuly",
                });
                this.props.actions.addAutoRemovableFlashMessage(FlashMessageType.SUCCESS, successfulLoginText, TIME_OF_LOG_IN_POP_UP);
            }, REACT_INTL_DELAY);
        }
    }

    onUnload = () => {
        this.props.actions.onCloseClicked();
    };

    setLanguage = (language: Language, rewrite = false) => {
        const lowerCasedLanguage = language.toLocaleLowerCase();
        const currentLang = localStorage.getItem(I18);
        if (currentLang && !rewrite) {
            return;
        }
        localStorage.removeItem(I18);
        localStorage.setItem(I18, lowerCasedLanguage);
        this.props.actions.changeLocale(lowerCasedLanguage);
        this.setState({
            language: lowerCasedLanguage,
        });
    };

    render = () => {
        return (
            <div id="footer">Footer</div>
        );
    };
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
    lang: state.locale.lang,
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({
        addAutoRemovableFlashMessage,
        deleteAllFlashMessages,
        logOut,
        changeLocale,
        fetchLanguages,
        onCloseClicked,
    }, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

//@ts-ignore
export default withSnackbar(connector(injectIntl(FooterLayout)));
