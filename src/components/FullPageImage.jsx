import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core"; 
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';

// ------- Styles -------
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },

    image: {
        width: '100%'
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));
// ----------------------


function FullPageImage(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // props.modalOpen('open')

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                disableBackdropClick={true}
                fullScreen={true}
            >
                <DialogTitle disableTypography={true} className={classes.title} id="alert-dialog-title"> 
                <Typography align='center' variant="h3"> 
                    {props.title}
                </Typography> 
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                <img className={classes.image} src={props.image} alt="image"/>
                </DialogContent>
            </Dialog>
            </div>
    );
}

export default FullPageImage;