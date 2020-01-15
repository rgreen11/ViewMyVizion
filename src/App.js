import React from 'react';
import Home from './container/Home';
import Header from './component/header/header';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Portfolio from './container/Portfolio/Portfolio';

import './App.css';
function App() {
  return (<>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </HashRouter>
  </>
  );
}

export default App;
