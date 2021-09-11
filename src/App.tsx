import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/components/header';
import MainPage from 'src/components/mainPage';
import './App.scss';
import { AppContextProvider } from './context/context';

const App: FC = () => {
  return (
    <div className='App'>
      <AppContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={MainPage} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
