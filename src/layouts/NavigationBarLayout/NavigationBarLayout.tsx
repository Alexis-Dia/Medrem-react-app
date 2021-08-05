/* eslint-disable react/no-did-mount-set-state */
import React from "react";
import { Language } from "../../types/common/Language";
import { connect, ConnectedProps } from "react-redux";
import { FormattedMessage, injectIntl, WrappedComponentProps } from "react-intl";
import { Helmet } from "react-helmet";
import { ModalBody } from "reactstrap";
import { withSnackbar } from "notistack";
import { bindActionCreators } from "redux";
import {
    IconButton,
    MenuItem,
    AppBar,
    Drawer,
    IconMenu,
} from "material-ui";
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "material-ui/Toolbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LanguageIcon from "material-ui/svg-icons/action/language";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Dialog,
} from "material-ui-old-core";
import {
    DE,
    DELIMITER,
    DEVELOPMENT,
    DOUBLE_SLASH,
    EN,
    FR,
    HOSTNAME,
    HTTPS,
    I18,
    PORT,
    SECURITY_TOPIC,
    TIME_OF_LOG_IN_POP_UP,
    WS,
    WS_MESSAGE_EXPIRE_MESSAGE,
} from "../../properties/properties";
//import { CommonUtils } from "../../utils";
import { changeLocale } from "../../api/lang/localeActions";
import { onCloseClicked, logOut } from "../../api/login/loginActions";
import { fetchLanguages } from "../../api/common/commonActions";
import { addAutoRemovableFlashMessage, deleteAllFlashMessages } from "../../api/flash/flashActions";
import { FlashMessageType } from "../../types/flash";
import { RootState } from "../../store/reducers";
import browserHistory from "../../routes/history";
import LogoIcon from "./img/navigationBarLayout/medrem-logo.png";
import SystemInformationSnackbar from "./snackbar/SystemInformationSnackbar";
import PublishedSystemInformation from "../../routes/homeView/PublishedSystemInformation/PublishedSystemInformation";
import "./NavigationBarLayout.scss";
import { WithSnackbarProps } from "../../lib/notistack/build";

import project from "../../../project.config";
import { AppPath } from "../../properties/appPath";

const REACT_INTL_DELAY = 1000;

interface WebSocketPayload {
    event: string;
    message: number;
}

interface Props extends PropsFromRedux, WrappedComponentProps, WithSnackbarProps {

}

interface State {
    isMenuOpen: boolean;
    isOffersItemOpen: boolean;
    isSqlItemOpen: boolean;
    isSystemInformationModalOpen: boolean;
    language: string;
}

class NavigationBarLayout extends React.Component<Props, State> {
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
        if (nextProps.auth.isAuthenticated) {
            //const { translations, informationType } = nextProps.newSystemInformation;
            //const filteredTranslations = translations.filter((translation) => translation.language.toLocaleLowerCase() === this.state.language!.toLowerCase());
            //const suitableTranslations = filteredTranslations.length === 1 ? filteredTranslations : translations;
            //const text = `${informationType} | ${suitableTranslations[0].text}`;

            const snackbarOptions = {
                autoHideDuration: 60000,
                persist: true,
                content: (key: number) => (
                    <SystemInformationSnackbar id={key} text={"text"} onShowAll={() => this.toggleSystemInformationModal()} />
                ),
            };
            this.props.enqueueSnackbar("", snackbarOptions);
        }
    }

    toggleSystemInformationModal = () => {
        this.setState((previousState) => ({
            ...previousState,
            isSystemInformationModalOpen: !previousState.isSystemInformationModalOpen,
        }));
    }

    onUnload = () => {
        this.props.actions.onCloseClicked();
    };

    logout = () => {
        this.props.actions.logOut();
        this.props.actions.deleteAllFlashMessages();
        browserHistory.push("/");
        this.setState({
            isMenuOpen: false,
        });
    };

    toggleMenu = () => {
        this.setState((previousState) => ({
            ...previousState,
            isMenuOpen: !previousState.isMenuOpen,
        }));
    };

    toggleOffersItem = () => {
        this.setState((previousState) => ({
            ...previousState,
            isOffersItemOpen: !previousState.isOffersItemOpen,
        }));
    };

    toggleSqlItem = () => {
        this.setState((previousState) => ({
            ...previousState,
            isSqlItemOpen: !previousState.isSqlItemOpen,
        }));
    };

    onPageClick = (path: string) => {
        browserHistory.push(path);
        this.setState({
            isMenuOpen: false,
        });
    };

    handleClickIndexPage = () => this.onPageClick(AppPath.HOME);

    handleClickContractsPage = (tab: string) => this.onPageClick(`${AppPath.DOCUMENTS}/${tab}`);

    handleClickPermissionManagementPage = () => this.onPageClick(AppPath.ROLES);

    handleClickUserManagementPage = () => this.onPageClick(AppPath.USERS);

    handleClickKpiPage = () => this.onPageClick(AppPath.KPI);

    handleClickSettingsPage = () => this.onPageClick(AppPath.SETTINGS);

    handleClickSqlScriptsPage = () => this.onPageClick(AppPath.SQL_SCRIPTS);

    handleClickReportMappingPage = () => this.onPageClick(AppPath.REPORT_MAPPING);

    handleClickSystemInformation = () => this.onPageClick(AppPath.SYSTEM_INFORMATION);

    handleClickEmailTemplates = () => this.onPageClick(AppPath.EMAIL_TEMPLATES);

    handleClickScmObjects = () => this.onPageClick(AppPath.SCM_OBJECTS);

    handleSetLanguage = (event) => {
        this.setLanguage(event.target.innerText, true);
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
        const { isAuthenticated } = this.props.auth;
        const allFeatures = localStorage.getItem("features");

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Helmet>
                        <title>
                            {this.props.intl.formatMessage({ id: "applicationName", defaultMessage: "Verkaufsangebot und Bestellsystem" })}
                        </title>
                    </Helmet>
                    <AppBar
                        className="app-bar-container"
                        title={<img className="logo-icon" src={LogoIcon} />}
                        iconElementLeft={
                            <IconButton className={`${isAuthenticated ? "" : "d-none"}`} iconStyle={{ fill: "#000000" }}>
                                <NavigationMenu />
                            </IconButton>
                        }
                        style={{ background: "#ffffff" }}
                        onLeftIconButtonClick={() => this.toggleMenu()}
                    >
                        <Toolbar style={{ backgroundColor: "#ffffff" }}>
                            <ToolbarGroup>
                                <IconMenu
                                    iconButtonElement={
                                        <IconButton>
                                            <LanguageIcon />
                                        </IconButton>
                                    }
                                    onItemClick={this.handleSetLanguage}
                                    value={this.state.language.toUpperCase()}
                                    anchorOrigin={{ horizontal: "right", vertical: "top" }}
                                    targetOrigin={{ horizontal: "right", vertical: "top" }}
                                    iconStyle={{ fill: "#000000", marginTop: "2px" }}
                                >
                                    <MenuItem value={EN.toUpperCase()} primaryText={EN.toUpperCase()} />
                                    <MenuItem value={DE.toUpperCase()} primaryText={DE.toUpperCase()} />
                                    <MenuItem value={FR.toUpperCase()} primaryText={FR.toUpperCase()} />
                                </IconMenu>
                                {isAuthenticated &&
                                <React.Fragment>
                                    <ToolbarSeparator />
                                    <IconButton iconStyle={{ fill: "#000000" }} onClick={() => this.logout()}>
                                        <ActionPowerSettingsNew />
                                    </IconButton>
                                </React.Fragment>
                                }
                            </ToolbarGroup>
                        </Toolbar>
                    </AppBar>
                    <div className="drower-main-1">
                        <Drawer
                            open={this.state.isMenuOpen}
                            docked={false}
                            onRequestChange={() => this.toggleMenu()}
                            overlayStyle={{ zIndex: 1, opacity: 0.25 }}
                            containerStyle={{
                                top: "1px",
                                zIndex: 99,
                                position: "absolute",
                                backgroundColor: "#ffffff",
                                height: "1200px",
                            }}
                        >
                            <div className="drower-main-2">
                                <nav className="navbar navbar-light navbar-expand-md">
                                    <div className="navbar-collapse collapse w-100">
                                        {isAuthenticated &&
                                        <List
                                            component="nav"
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <ListItem button onClick={this.handleClickIndexPage} disableGutters>
                                                <ListItemText primary={<FormattedMessage id="home" defaultMessage="Home" />} />
                                            </ListItem>
                                            <Divider />
                                        </List>
                                        }
                                    </div>
                                </nav>
                            </div>
                        </Drawer>
                    </div>
                    <Dialog
                        open={this.state.isSystemInformationModalOpen}
                        className="published-sys-info-modal"
                        fullWidth
                        maxWidth="md"
                        onClose={() => this.toggleSystemInformationModal()}
                    >
                        <ModalBody>
                            <PublishedSystemInformation />
                        </ModalBody>
                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
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
export default withSnackbar(connector(injectIntl(NavigationBarLayout)));
