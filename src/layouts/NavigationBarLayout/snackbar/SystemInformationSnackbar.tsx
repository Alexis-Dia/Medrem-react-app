import React from "react";
import { useSnackbar } from "notistack";
import { Card, Typography, IconButton, CardActions } from "@material-ui/core";
import { Close as CloseIcon, Subject as SubjectIcon } from "@material-ui/icons";
import "./SystemInformationSnackbar.scss";

interface Props {
    id: number;
    text: string;
    onShowAll(): void;
}

const SystemInformationSnackbar = (props: Props, ref: any) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = () => {
        closeSnackbar(props.id);
    };

    return (
        <Card className="system-information-card" innerRef={ref}>
            <CardActions classes={{ spacing: "spacing" }}>
                <Typography>
                    {props.text}
                </Typography>
                <div>
                    <IconButton className="expand" onClick={props.onShowAll}>
                        <SubjectIcon />
                    </IconButton>
                    <IconButton className="expand" onClick={handleDismiss}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export default React.forwardRef(SystemInformationSnackbar);
