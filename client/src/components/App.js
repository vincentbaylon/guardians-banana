import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Login from './Login'

function App() {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Login />
      </Container>
    </div>
  );
}

export default App;
