import {useEffect, useState} from 'react'
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import useStyles from './Styles'



function End({ user }){
    const classes = useStyles();
    const [currentScore, setCurrentScore] = useState(0)
    const [newScore, setNewScore] = useState(0)
    const [points, setPoints] = useState(0)

    
    useEffect(() => {
        fetch(`http://localhost:4000/high_scores/${user.id}`)
        .then( res => res.json())
        .then(setCurrentScore)
        // console.log(currentScore.score)
        setNewScore(currentScore.score + points)
        setPoints(25)
    }, [])

    function displayScore() {
            return (
              
                <Grid item>
                  <Typography variant="h3" align="center">
                    {`${currentScore.score} + ${points} = ${newScore}`}
                  </Typography> 
                </Grid >
              
            )
          }


    return(
        <>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.height} spacing={0}>
                <Grid item className={classes.background} xs={12}>
                <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" spacing={0} className={classes.characterContainer} xs={12}>
                    <Grid container spacing={20} xs={12} direction="column" justifyContent="center" alignContent="center" alignItems="center">
                    <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                        <Typography variant="h2" className={classes.title}>
                            Battle Score
                        </Typography>
                        <div className={classes.demo}>
                        <List  >
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <EmojiEvents fontSize="large" />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                primary={displayScore()}
                                />
                            </ListItem>
                        </List>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </>

    )

}

export default End
