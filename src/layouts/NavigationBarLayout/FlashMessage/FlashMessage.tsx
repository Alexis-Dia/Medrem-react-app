import React from "react";
import { FormattedMessage } from "react-intl";
import classnames from "classnames";
import Button from "material-ui-old-core/Button";
import { FlashMessageType } from "../../../types/flash";

interface Props {
    type: string;
    text: string;
    details?: string;

    onCloseClick(e: React.MouseEvent<HTMLButtonElement>): void;
    onShowDetailsClick(): void;
}

const FlashMessage = (props: Props) => {
    const { type } = props;

    return (
        <div className={classnames("alert", {
            "alert-success text-center": type === FlashMessageType.SUCCESS,
            "alert-info text-center": type === FlashMessageType.ALERT,
            "alert-warning text-center": type === FlashMessageType.WARNING,
            "alert-danger text-center": type === FlashMessageType.ERROR,
            "alert-primary text-center": type === FlashMessageType.PRIMARY,
        })}
        >
            <button className="close" onClick={props.onCloseClick} type="button">
                    &times;
            </button>
            {props.text}
            {props.details &&
                <div>
                    <Button variant="outlined" onClick={props.onShowDetailsClick}>
                        <FormattedMessage id="showDetails" defaultMessage="Details anzeigen" />
                    </Button>
                </div>
            }
        </div>
    );
};

FlashMessage.defaultProps = {
    onShowDetailsClick() {},
};

export default FlashMessage;
