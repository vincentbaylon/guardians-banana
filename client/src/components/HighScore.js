import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react'
import Blue from '../assets/blue-bg.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 752,
    backgroundImage: `url(${Blue})`,
    backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',

  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



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


  useEffect(() =>{
    fetch('http://localhost:4000/high_scores')
    .then((r) => r.json())
    .then(setHigh)
        
    },[])

    function displayScores(){
        return ( 
        high.map((score) => (
            // score.map((scr) => ()
            
            
            <p>Name:{score.user.username} Points: {score.score}{console.log(score)}</p>
         ))
        )
        
    }
    function displayUsername(){


    }

  return (
    <div className={classes.root}>
     
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            HighScores
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
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
    </div>
  );
}

export default HighScore