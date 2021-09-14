import { React, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HighScore from './HighScore';

import Login from './Login';
import Account from './Account';
import Character from './Character';

import Fetch from './Fetch'

function App() {
  const history = useHistory()
  const [user, setUser] = useState()
  const [selectedChar, setSelectedChar] = useState({})

  const onLogout = () => {
    setUser()
    setSelectedChar({})
    history.push('/')
  }

  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Switch>
          <Route path="/account">
            <Account user={user} selectedChar={selectedChar} onLogout={onLogout} />
          </Route>
          <Route path="/character">
            <Character user={user} setSelectedChar={setSelectedChar} selectedChar={selectedChar} />
          </Route>
          <Route exact path="/">
            <Login setUser={setUser} setSelectedChar={setSelectedChar} />
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
