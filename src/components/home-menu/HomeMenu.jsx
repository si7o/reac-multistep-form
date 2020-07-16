import React from 'react'
import { Link } from 'react-router-dom'
import { Paper, Grid } from '@material-ui/core'

export default function MainMenu() {
    
    return (        
        <Grid container spacing={3} alignItems="center" >            
            <Grid item xs={3}>
                <Paper>
                    <Link to="/">Home</Link>
                </Paper>
            </Grid>
            <Grid item xs={3}>        
                <Paper>
                    <Link to="/supplier/add">Add Supplier</Link>
                </Paper>
            </Grid>
        </Grid>
    )    
}
