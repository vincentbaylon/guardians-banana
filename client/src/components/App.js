import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Login from './Login'
import Account from './Account'

function App() {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
