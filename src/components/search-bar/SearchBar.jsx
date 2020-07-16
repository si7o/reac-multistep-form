import React from 'react'
import { TextField, Grid, Container, InputAdornment, useTheme, Box, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import './SearchBar.scss'

export default function Search() {
    const theme = useTheme()
    return (
        <Box className="search-bar" css={{backgroundColor: theme.palette.grey.main}}>
            <Container>
                <Grid container alignItems="center">                    
                    <Grid item xs={12} sm={10}>
                        <TextField 
                            id="search-properties" 
                            type="search" 
                            fullWidth={true} 
                            variant="outlined" 
                            placeholder="Search Properties"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Link component="button" color="inherit">
                            Advanced Search
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
