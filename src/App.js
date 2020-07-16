import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddSupplier from './pages/AddSupplier'
import Header from './components/header/Header'
import NotFound from './pages/NotFound'
import { Container, ThemeProvider, Box } from '@material-ui/core'
import SideBar from './components/side-bar/SideBar'

import { customTheme } from './themes/CustomTheme'


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Header />
        <Container>    
          <Box className="main-content">
              <SideBar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/supplier/add"  component={AddSupplier}/>
                {/*<Route component={NotFound} />*/}
              </Switch>        
          </Box>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
