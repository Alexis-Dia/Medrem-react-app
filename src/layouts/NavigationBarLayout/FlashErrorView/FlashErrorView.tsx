import React from "react";
import { FormattedMessage } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { RootState } from "../../../store/reducers";
import { closeError } from "../../../api/error/errorActions";
import FlashMessage from "../FlashMessage/FlashMessage";
import { FlashMessageType } from "../../../types/flash";
import "./FlashErrorView.scss";

type Props = PropsFromRedux;

interface State {
    isDetailsModalOpen: boolean;
}

class FlashErrorView extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isDetailsModalOpen: false,
        };
    }

    toggleDetailsModal = () => {
        this.setState((previousState) => ({
            isDetailsModalOpen: !previousState.isDetailsModalOpen,
        }));
    };

    handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.persist();
        this.props.closeError();
    };

    render = () => {
        //const { errorState } = this.props;

        return (
            <div>err</div>
        );
    };
}

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
    closeError: bindActionCreators(closeError, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FlashErrorView);
