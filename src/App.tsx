import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage';
import Header from './components/header';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
