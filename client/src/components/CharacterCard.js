import { Grid, requirePropFactory } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './Styles'

import Lantz from '../assets/characters/lantz-idle.png'


function CharacterCard({ character }) {
    const { character_name } = character
    const classes = useStyles()
  
    return (
        <>
            <Grid item xs style={{ textAlign: "center" }}>
                <Paper variant="outlined" elevation={3} className={classes.paper}>
                    <img src={'https://i.ibb.co/mSqk8wH/whiting-idle.png'} className={classes.imageCard} />
                    <Typography variant="h5" color="secondary">
                        {character_name}
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default CharacterCard