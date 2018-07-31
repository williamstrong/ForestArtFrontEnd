import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AboutMe from './AboutMe';
import Art from './Art';
import Contact from './Contact';

import '../styles/main.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/art" component={Art} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default App;
