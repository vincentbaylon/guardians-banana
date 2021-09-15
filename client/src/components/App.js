import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HighScore from './HighScore';
import Navbar from './Navbar';

import Login from './Login';
import Account from './Account';
import Character from './Character';

import Fetch from './Fetch'

function App() {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <> <Navbar/> </>
        
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/character">
            <Character />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/high_scores">
            <HighScore />
          </Route>
        </Switch>
      </Container>
      <Fetch />
    </div>
  );
}

export default App;
