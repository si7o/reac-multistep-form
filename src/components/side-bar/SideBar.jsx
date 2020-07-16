import React from 'react'
import { Box, Button } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { useLocation } from 'react-router'
import { Link as RouterLink } from 'react-router-dom';

import './SideBar.scss'

export default function SideBar() {
    const location = useLocation()

    return location.pathname !== '/' && (
        <Box className="sidebar">
            <Button component={RouterLink} variant="text" to="/">
                <KeyboardBackspaceIcon />
                Go Back
            </Button>
        </Box>
    )
}
