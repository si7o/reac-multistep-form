import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PostAddIcon from '@material-ui/icons/PostAddOutlined';

const useStyles = makeStyles((theme) => ({
    homeMenu: {
        width: '100%',
        textAlign: 'center',
    },
    button: {        
        height: "200px",
        width: "200px",
        border: `5px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        borderRadius: "10px",
        marginRight: "1rem",
        '&:hover': {
            textShadow: `0 0 3px ${theme.palette.primary.main}`,
            boxShadow: `0 0 3px ${theme.palette.primary.main}`,
        }
    },
    icon: {
        height: "200px",
        width: "200px",

    }
}))

export default function MainMenu() {
    const classes = useStyles()
    
    return (        
        <Box className={classes.homeMenu}>
            <ButtonBase component={Link} to="/" title="Home" className={classes.button} variant="outlined" color="primary">                
                <HomeIcon className={classes.icon}/>
            </ButtonBase>
            <ButtonBase component={Link} to="/supplier/add" title="Add Supplier" className={classes.button} variant="outlined" color="primary">
                <PostAddIcon className={classes.icon}/>
            </ButtonBase>
        </Box>
    )    
}
