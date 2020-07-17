import React from 'react'
import { Box } from '@material-ui/core'

import GoBackButton from './GoBackButton'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    sidebar: {
        padding: '1rem',
        width: '200px',
        minWidth: '200px',
    }
})

export default function SideBar({children}) {

    const classes = useStyles()

    return (
        <Box className={classes.sidebar}>
            <GoBackButton />
            {children}
        </Box>
    )
}
