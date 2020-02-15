import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'scenes/Home';
import Question from 'scenes/Question';
import 'stylesheets/application.scss';

const App = _ => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/question' component={Question} />
    </Router>
  )
}

export default App;
