import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import AboutMe from './aboutMe/AboutMe';
import Art from './art/Art';
import Contact from './contact/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/art" component={Art} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
