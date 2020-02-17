import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'scenes/Home';
import NotFound from 'scenes/NotFound';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Question, NewQuestion } from 'scenes/Question/';
import 'stylesheets/application.scss';

const App = _ => {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/question/new' component={NewQuestion} />
        <Route path='/question/:id' component={Question} />
        <Route component={NotFound} />
      </Switch>
      {/* <Route component={Footer} /> */}
    </Router>
  );
};

export default App;
