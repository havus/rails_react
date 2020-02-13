import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'scenes/Home';

const App = _ => {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  )
}

export default App;
