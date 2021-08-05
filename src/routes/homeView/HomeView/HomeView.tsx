import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl, FormattedMessage, WrappedComponentProps } from "react-intl";
import { Grid, Paper } from "@material-ui/core";
import UsersIcon from "../images/multiple-users-silhouette.png";
import OffersIcon from "../images/case.png";
import PermissionIcon from "../images/cubes.png";
import KpiIcon from "../images/statistic.png";
import ScmObjectIcon from "../images/scm-object.png";
import browserHistory from "../../history";
import { CommonUtils } from "../../../utils";
import PublishedSystemInformation from "../PublishedSystemInformation/PublishedSystemInformation";
import "./HomeView.scss";
import { AppPath } from "../../../properties/appPath";

type Props = PropsFromRedux & WrappedComponentProps

class HomeView extends React.Component<Props> {
    componentDidMount() {
    }

	handleKpiClick = () => {
	    browserHistory.push(AppPath.KPI);
	};

	handleUsersManagementClick = () => {
	    browserHistory.push(AppPath.USERS);
	};

	handleOffersManagementClick = () => {
	    browserHistory.push(AppPath.DOCUMENTS);
	};

	handleRolesManagementClick = () => {
	    browserHistory.push(AppPath.ROLES);
	};

	handleScmObjectClick = () => {
	    browserHistory.push(AppPath.SCM_OBJECTS);
	}

	render = () => {
	    const allFeatures = localStorage.getItem("features");

	    return (
	        <div>aaa</div>
	    );
	};
}

const mapDispatchToProps = (dispatch: any) => ({

});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default injectIntl(connector(HomeView));
