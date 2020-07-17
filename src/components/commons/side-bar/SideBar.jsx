import React from 'react'
import { Box } from '@material-ui/core'

import { useLocation } from 'react-router'

import './SideBar.scss'
import GoBackButton from '../GoBackButton'

export default function SideBar({children}) {
    const location = useLocation()

    return location.pathname !== '/' && (
        <Box className="sidebar">
            <GoBackButton />
            {children}
        </Box>
    )
}
