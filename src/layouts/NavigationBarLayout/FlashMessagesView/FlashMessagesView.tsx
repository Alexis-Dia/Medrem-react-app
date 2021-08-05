import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFlashMessageById } from "../../../api/flash/flashActions";
import { RootState } from "../../../store/reducers";
import FlashMessageView from "../FlashMessage/FlashMessage";
import "./FlashMessagesView.scss";

type Props = PropsFromRedux;

const FlashMessagesView = (props: Props) => (
    <div className="flash-message-main-style">
        {props.flashMessages.map((flashMessage) => (
            <FlashMessageView
                key={flashMessage.id}
                type={flashMessage.type}
                text={flashMessage.text}
                onCloseClick={() => props.deleteFlashMessageById(flashMessage.id)}
            />
        ))}
    </div>
);

const mapStateToProps = (state: RootState) => ({
    flashMessages: state.flashMessages,
});

const mapDispatchToProps = (dispatch: any) => ({
    deleteFlashMessageById: bindActionCreators(deleteFlashMessageById, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FlashMessagesView);
