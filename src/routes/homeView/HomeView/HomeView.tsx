import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { injectIntl, WrappedComponentProps } from "react-intl";
import "./HomeView.scss";

type Props = PropsFromRedux & WrappedComponentProps

class HomeView extends React.Component<Props> {
    componentDidMount() {
    }

	render = () => {
	    return (
	        <div>It's a HomeView.</div>
	    );
	};
}

const mapDispatchToProps = (dispatch: any) => ({

});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default injectIntl(connector(HomeView));
