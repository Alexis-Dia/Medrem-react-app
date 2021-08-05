import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./PublishedSystemInformation.scss";
import { RootState } from "../../../store/reducers";

type Props = PropsFromRedux;

const PublishedSystemInformation = (props: Props) => {
    const { systemInformations, language } = props;

    return (
        systemInformations.length > 0 ?
            <div className="published-system-information">
                <h3>
                    <FormattedMessage id="systemInformation" defaultMessage="System Information" />
                </h3>
                <ul>
                    {systemInformations.map((systemInformation) => {
                        const foundTranslation = systemInformation.translations.filter((translation) => language && translation.language.toLowerCase() === language.toLowerCase())[0];
                        const text = foundTranslation ? foundTranslation.text : "";
                        return (
                            <li key={systemInformation.id}>
                                <div className="information-text">
                                    {`${systemInformation.informationType} | ${text}`}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div> :
            <div />
    );
};

const mapStateToProps = (state: RootState) => ({
    language: state.locale.lang || state.auth.user.language,
    systemInformations: state.system.currentlyPublished,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PublishedSystemInformation);
