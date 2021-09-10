import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/components/header';
import MainPage from 'src/components/mainPage';
import './App.scss';

 
const App: FC = () => { 
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
