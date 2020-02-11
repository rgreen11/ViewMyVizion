import React from 'react';
import Home from './container/Home';
import Header from './component/header/header';
import { Switch, Route, HashRouter, withRouter } from 'react-router-dom';
import Portfolio from './container/Portfolio/Portfolio';
import Photography from './container/Photography/Photography';
import Navbar from './component/NavBar/Navbar';

import './App.css';
function App(props) {
  return (<>
    <HashRouter>
      {(props.history.location.hash !== '#/') ? <Route component={Navbar} /> : ''}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/photography' component={Photography} />
      </Switch>
    </HashRouter>
  </>
  );
}

export default withRouter(App);
/*
------THINGS TO FIX------
ON PORTFOLIO PAGE
IMAGES SHAKE ON HOVER
ON LOAD IMAGES HAVE TO ADJUST TO OBJECCT FIT PROPERTY
*/