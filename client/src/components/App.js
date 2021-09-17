import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HighScore from './HighScore';
import Battle from './Battle'
import Navbar from './Navbar';
import Login from './Login';
import Account from './Account';
import Character from './Character';

function App() {
  const history = useHistory()
  const [user, setUser] = useState()
  const [selectedChar, setSelectedChar] = useState()

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log("/ME", user)

          if (user !== null) {
            console.log("NOT NULL")
            setUser(user)
            if (user.characters !== undefined) {
              setSelectedChar(user.characters[0])
            }
          }
        });
      }
    });
  }, []);

  const onLogout = () => {
    setUser()
    setSelectedChar()
    history.push('/')
  }

  const location = useLocation();
  // console.log(location);

  return (
    <div>
      <CssBaseline />
      <Container fixed>
        {location.pathname == '/' || location.pathname == '/battle' ? null : <Navbar onLogout={onLogout} selectedChar={selectedChar} />}

        <Switch>
          <Route path="/account">
            <Account user={user} selectedChar={selectedChar} onLogout={onLogout} setUser={setUser} />
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
          <Route path="/battle">
            <Battle user={user} selectedChar={selectedChar} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
