import React from 'react'
import { Button, Link } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        textTransform: "none",
        fontWeight: "bold",
        color: theme.palette.black.main,
        display: "flex",
        verticalAlign: "middle",
    },
}))

export default function GoBackButton() {
    const classes = useStyles()
    return (
        <Link component={RouterLink}  to="/" className={classes.button}>
            <KeyboardBackspaceIcon />
            Go Back
        </Link>
    )
}
