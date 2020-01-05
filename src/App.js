import React from 'react';
import Home from './container/Home';
import Header from './component/header/header';
import { Switch, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (<>
    {/* <Header /> */}
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </>
  );
}

export default App;
