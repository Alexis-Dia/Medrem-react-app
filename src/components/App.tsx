import React from "react";
import { Router, Route } from "react-router-dom";
import browserHistory from "../routes/history";
import HomeView from "../routes/homeView";
import NavigationBarLayout from "../layouts/NavigationBarLayout/NavigationBarLayout";
import FlashErrorView from "../layouts/NavigationBarLayout/FlashErrorView/FlashErrorView";
import FlashMessagesView from "../layouts/NavigationBarLayout/FlashMessagesView/FlashMessagesView";
import AppWrapper from "./AppWrapper";
import { AppPath } from "../properties/appPath";
import LoginView from "../routes/loginView/LoginView";
import FooterLayout from "../layouts/FooterLayout/FooterLayout";
//TODO add IE support (addLocaleData is removed)
/* require('@formatjs/intl-pluralrules/polyfill');
require('@formatjs/intl-pluralrules/locale-data/de');
require('@formatjs/intl-pluralrules/locale-data/en');
require('@formatjs/intl-pluralrules/locale-data/fr');

require('@formatjs/intl-relativetimeformat/polyfill');
require('@formatjs/intl-relativetimeformat/locale-data/de');
require('@formatjs/intl-relativetimeformat/locale-data/en');
require('@formatjs/intl-relativetimeformat/locale-data/fr'); */

interface Props {
	store: any;
}

class App extends React.Component<Props> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <AppWrapper store={this.props.store}>
                <div id="container"
                     style={{
                         minHeight: '100%',
                         //position:'relative'
                }}>
                    <div id="header">
                        <NavigationBarLayout />
                    </div>
                    <div id="body" style={{ padding: '10px', paddingBottom:'60px'}}>
                        <FlashErrorView />
                        <FlashMessagesView />
                        <Router history={browserHistory}>
                            <Route exact path={AppPath.HOME} component={HomeView} />
                            <Route exact path={AppPath.LOGIN} component={LoginView} />
                        </Router>
                    </div>
                    <div id="footer" style={{ position: 'absolute', bottom:'0', width: '100%', height:'60px', background: '#f2f2f2', borderTop: '1px solid #DADADA'}}>
                        <FooterLayout />
                    </div>
                </div>
            </AppWrapper>
        );
    }
}

export default App;
