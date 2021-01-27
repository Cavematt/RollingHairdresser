import React, { useEffect, useState } from 'react'
import './App.css';
import FrontPage from './Pages/FrontPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './Toolbar';
import AboutMe from './Pages/AboutMe';
import MobileHairdressing from './Pages/MobileHairdressing';
import Weddings from './Pages/Weddings'
import Portfolio from './Pages/Portfolio'
import ContactMe from './Pages/ContactMe'
import Covid from './Pages/Covid';
import MobileLink from './MobileLink';
import MobileBar from './MobileBar';


function App() {

  return (
    <div>
      <Router>
        <Toolbar />
        <Switch> 
        <Route path='/' exact>
          <FrontPage />
        </Route>
        <Route path='/AboutMe' exact>
          <AboutMe />
        </Route>
        <Route path='/Hairdressing' exact>
          <MobileHairdressing />
        </Route>
        <Route path='/Weddings' exact>
          <Weddings />
        </Route>
        <Route path='/Portfolio' exact>
          <Portfolio />
        </Route>
        <Route path="/Contact" exact>
          <ContactMe />
        </Route>
        <Route path='/MobileLink' exact>
          <MobileLink />
        </Route>
        <Route path="/covid" exact>
          <Covid />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
