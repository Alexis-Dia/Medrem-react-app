import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import moment from "moment";
import React from "react";
import en from "../../public/i18n/en.json";
import de from "../../public/i18n/de.json";
import fr from "../../public/i18n/fr.json";
import { connect, ConnectedProps, Provider } from "react-redux";
import { RootState } from "../store/reducers";
import { IntlProvider } from "react-intl";
import { SnackbarProvider } from "notistack";
import { Button } from "material-ui-old-core";
import { LANGUAGE_DEFAULT} from "../properties/properties";

interface Props extends PropsFromRedux {
    children: JSX.Element;
    store: any;
}

interface State {
    language: string;
}

const localeMap = {
    de: "de",
    en: "en",
    fr: "fr",
};

const messages = { de, en, fr };

class AppWrapper extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            language: LANGUAGE_DEFAULT,
        };
    }

    notistackRef = React.createRef<any>();

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.language !== this.props.language) {
            this.setState({
                language: nextProps.language,
            });
        }
    }

    onClickDismiss = (key: string | number) => () => {
        this.notistackRef.current!.closeSnackbar(key);
    };

    render = () => {
        const { language } = this.state;
        const locale = localeMap[language];
        moment.locale(language);

        return (
            <Provider store={this.props.store}>
                <MuiPickersUtilsProvider utils={MomentUtils} locale={locale} moment={moment}>
                    <IntlProvider locale={language} messages={messages[language]}>
                        <SnackbarProvider
                            maxSnack={10}
                            //@ts-ignore
                            ref={this.notistackRef}
                            action={(key) => (
                                <Button className="snackbar-button" onClick={this.onClickDismiss(key)}>Hide</Button>
                            )}
                        >
                            {this.props.children}
                        </SnackbarProvider>
                    </IntlProvider>
                </MuiPickersUtilsProvider>
            </Provider>
        );
    };
}

const mapStateToProps = (state: RootState) => ({
    language: state.locale.lang,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AppWrapper);
