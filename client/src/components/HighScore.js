import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import { useEffect, useState } from 'react'
import useStyles from './Styles'

function HighScore() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [high, setHigh] = useState([])

  function generate(element) {
    return high.map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  useEffect(() => {
    fetch('http://localhost:4000/high_scores')
      .then((r) => r.json())
      .then(setHigh)
  }, [])

  function displayScores() {
    return (
      high.map((score) => (
        <Grid item>
          <Typography variant="h3" align="left">
            {score.user.username}
          </Typography> 
          <Typography variant="h5" align="right">
            {score.score}
          </Typography> 
        </Grid >
      ))
    )
  }

  return (
    <>
      <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.height} spacing={0}>
        <Grid item className={classes.background} xs={12}>
          <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" spacing={0} className={classes.characterContainer} xs={12}>
            <Grid container spacing={2} xs={12} direction="column" justifyContent="center" alignContent="center" alignItems="center">
              <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                <Typography variant="h2" className={classes.title}>
                  Hi-Scores
                </Typography>
                <div className={classes.demo}>
                  <List dense={dense} >
                    {generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <EmojiEvents fontSize="large" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={displayScores()}
                          secondary={secondary ? 'Secondary text' : null}
                        />
                      </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HighScore