import React from "react";
import { Router, Route } from "react-router-dom";
import browserHistory from "../routes/history";
import HomeView from "../routes/homeView";
import NavigationBarLayout from "../layouts/NavigationBarLayout/NavigationBarLayout";
import FlashErrorView from "../layouts/NavigationBarLayout/FlashErrorView/FlashErrorView";
import FlashMessagesView from "../layouts/NavigationBarLayout/FlashMessagesView/FlashMessagesView";
import AppWrapper from "./AppWrapper";
import { AppPath } from "../properties/appPath";
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
                <div>
                    <NavigationBarLayout />
                    <FlashErrorView />
                    <FlashMessagesView />
                    <Router history={browserHistory}>
                        <Route exact path={AppPath.HOME} component={HomeView} />
                    </Router>
                </div>
            </AppWrapper>
        );
    }
}

export default App;
