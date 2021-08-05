/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui-old-core/styles";
import { injectIntl } from "react-intl";
import findIndex from "lodash/findIndex";

import { Paper, TextField, Tooltip } from "material-ui-old-core";
import MenuItem from "material-ui/MenuItem";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { saveSuggestion } from "../../../api/common/commonActions";

const styles = (theme) => ({
    container: {
        position: "relative",
        width: "100%",
    },
    suggestionsContainerOpenBottom: {
        position: "absolute",
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestionsContainerOpenTop: {
        position: "absolute",
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
        bottom: "50px",
        maxHeight: 400,
        overflow: "auto",
    },
    suggestion: {
        display: "block",
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: "none",
    },
    divider: {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        height: theme.spacing.unit * 2,
    },
    inputItemSelected: {
        "&>div>div>div": { color: "#ff0015", fontSize: "larger" },

    },
    inputItem: {
        "&>div>div>div": { color: "#ff0015", fontSize: "larger" },
    },
    inputColor: {
        "&>div": { color: "#ff0015" },
        "&>label": { color: "#ff0015" },
    },
    inputSpan: {
        "&>div": { backgroundColor: "#d3d8d5" },
    },
    inputRedColor: {
        color: "#ff0015",
    },
    menuItem: {
        textOverflow: "ellipsis",
        whiteSpace: "no-wrap",
        overflow: "hidden",
    },
});

class AutoSuggest extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            suggestion: "",
            suggestions: [],
            suggestionsInitial: [],
            isCustomValue: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.suggestion && this.props.suggestion !== prevProps.suggestion) {
            this.setState({
                suggestion: this.props.fieldName === "billingContact" || this.props.fieldName === "deliveryContact" || this.props.fieldName === "mainContact" || this.props.empty ? this.props.suggestion : this.props.suggestion.fullAddress,
            });
            let isCustomValue = false;
            this.state.suggestionsInitial && this.state.suggestionsInitial.map((ob) => {
                if (ob.fullAddress === this.props.suggestion.fullAddress && ob.modified) {
                    isCustomValue = true;
                }
            });
            this.setState({
                isCustomValue,
            });
        }

        if (!this.props.suggestion && this.props.suggestion !== prevProps.suggestion) {
            this.setState({
                suggestion: "",
            });
        }

        if (this.props.selectedCustomerId !== prevProps.selectedCustomerId) {
            this.setState({
                suggestion: "",
            });
        }

        if (this.props.suggestionsInitial && this.props.suggestionsInitial !== prevProps.suggestionsInitial) {
            this.setState({
                suggestionsInitial: this.props.suggestionsInitial,
            });
            let isCustomValue = false;
            this.props.suggestionsInitial && this.props.suggestionsInitial.map((ob) => {
                if (ob.fullAddress === this.state.suggestion.fullAddress && ob.modified) {
                    isCustomValue = true;
                }
            });
            this.setState({
                isCustomValue,
            });
        }
    }

    onChange = (fieldName) => (e, { newValue }) => {
        const index = findIndex(this.state.suggestionsInitial, { fullAddress: newValue });
        if ((fieldName === "billingAddress" || fieldName === "deliveryAddress") && index === -1) {
            return;
        }
        this.props.setSuggestionField({
            key: fieldName,
            value: index === -1 ? newValue : this.state.suggestionsInitial[index],
            index,
        });
        this.setState({
            suggestion: newValue,
        });
        if (index !== -1 && this.state.suggestionsInitial[index].modified) {
            this.setState({
                isCustomValue: true,
            });
        } else if (newValue === "") {
            this.setState({
                isCustomValue: false,
            });
        } else if (index !== -1 && this.state.suggestionsInitial[index].modified === false) {
            this.setState({
                isCustomValue: false,
            });
        } else {
            this.setState({
                isCustomValue: true,
            });
        }
    };

    handleDeliveryAddressFetchRequested = ({ value }) => {
        const suggestions = this.getDeliveryAddressSuggestions(value);
        this.setState({
            suggestions,
        });
    };

    handleDeliveryAddressClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    shouldRenderDeliveryAddress = () => {
        return true;
    };

    renderInputDeliveryAddressComponent = (inputProps) => {
        const { classes, inputRef = () => {}, ref, ...other } = inputProps;
        let modified = false;
        const deliveryIndex = findIndex(this.state.suggestionsInitial, { fullAddress: inputProps.value });
        if (deliveryIndex === -1 && inputProps.value !== "") {
            modified = true;
        }
        return (
            <TextField
                className={(modified || this.state.isCustomValue) ? classes.inputColor : ""}
                fullWidth
                disabled={this.props.disabled}
                InputProps={{
                    inputRef(node) {
                        ref(node);
                        inputRef(node);
                    },
                    classes: {
                        input: (modified || this.state.isCustomValue) && classes.inputRedColor,
                    },
                }}
                {...other}
            />
        );
    };

    renderDeliveryAddress = (suggestion, { query, isHighlighted }) => {
        const { classes } = this.props;
        const matches = match(suggestion.fullAddress, query);
        const parts = parse(suggestion.fullAddress, matches);
        return (
            <Tooltip title={suggestion.fullAddress} enterDelay={50}>
                <MenuItem
                    selected={isHighlighted}
                    component="div"
                    className={
                        suggestion.modified
                            ? suggestion.fullAddress === this.state.suggestion
                                ?
                                classes.inputItemSelected
                                :
                                classes.inputItem
                            : suggestion.fullAddress === this.state.suggestion ? classes.inputSpan : ""
                    }
                >
                    <div className={classes.menuItem}>
                        {parts.map((part, index) => (part.highlight
                            ? (
                                <span key={String(index)} style={{ fontWeight: 500 }}>
                                    {part.text}
                                </span>
                            )
                            : (
                                <strong key={String(index)} style={{ fontWeight: 300 }}>
                                    {part.text}
                                </strong>
                            )),
                        )}
                    </div>
                </MenuItem>
            </Tooltip>
        );
    };
    getDeliveryAddressSuggestions = (value) => {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === -1
            ? []
            : this.state.suggestionsInitial;
    };
    getDeliveryAddressSuggestionValue = (suggestion) => {
        return suggestion.fullAddress;
    };

    render = () => {
        const { classes } = this.props;
        const label = this.state.isCustomValue ? this.props.translateKeyCustom : this.props.translateKey;
        const autosuggestProps = {
            renderInputComponent: this.renderInputDeliveryAddressComponent,
            suggestions: this.state.suggestions,
            onSuggestionsFetchRequested: this.handleDeliveryAddressFetchRequested,
            onSuggestionsClearRequested: this.handleDeliveryAddressClearRequested,
            shouldRenderSuggestions: this.shouldRenderDeliveryAddress,
            getSuggestionValue: this.getDeliveryAddressSuggestionValue,
            renderSuggestion: this.renderDeliveryAddress,
        };
        return (
            <React.Fragment>
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        label,
                        value: this.state.suggestion,
                        onChange: this.onChange(this.props.fieldName),
                        name: this.props.fieldName,
                        InputLabelProps: {
                            shrink: this.state.suggestion !== "",
                        },
                    }}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: this.props.top ? classes.suggestionsContainerOpenTop : classes.suggestionsContainerOpenBottom,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={(options) => (
                        <Paper {...options.containerProps} square>
                            {options.children}
                        </Paper>
                    )}
                />
                <div className={classes.divider} />
            </React.Fragment>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setSuggestionField: (data) => dispatch(saveSuggestion(data)),
    };
};

export default connect(
    null,
    mapDispatchToProps,withStyles
)(withStyles(styles)(injectIntl(AutoSuggest)));
