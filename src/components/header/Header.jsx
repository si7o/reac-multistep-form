import React from 'react'

import SearchBar from 'components/search-bar/SearchBar';
import { AppBar, Typography} from '@material-ui/core';

import './Header.scss'

export default function Header() {    
    return (
        <>
            <AppBar position="sticky" className="header">                
                <Typography variant="h2">
                    LooGoo
                </Typography>
            </AppBar>
            <SearchBar />
        </>
    )
}
