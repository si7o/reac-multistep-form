import React from 'react'
import HomeMenu from 'components/home-menu/HomeMenu'
import { Container } from '@material-ui/core'

export default function Home() {
    return (  
        <Container>
            <h2>Home</h2>      
            <HomeMenu/>
        </Container>
    )
}
