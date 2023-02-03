import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.module.scss';
import { Home } from '@pages/Home';
import { InputPage } from '@pages/InputPage';
import { Nav } from '@components/Nav';
import { Arrays } from '@pages/Arrays';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/InputPage'} exact component={InputPage} />
        <Route path={'/Arrays'} exact component={Arrays} />
      </Switch>
    </Router>
  );
};

export default App;
