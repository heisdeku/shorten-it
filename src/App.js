import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/mylinks" component={MyLinks} />
          <Route path="/" component={Home} />          
      </Switch>
    </Router>
  
  );
}

export default App;
