import { Grid, requirePropFactory } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './Styles'

import testImage from '../assets/characters/aaron-idle.png'


function CharacterCard({ character, setSelectedChar }) {
    const { character_name, image_url } = character
    const classes = useStyles()

    const handleClick = () => {
        setSelectedChar(character)
    }
  
    return (
        <>
            <Grid item xs style={{ textAlign: "center" }}>
                <Paper variant="outlined" elevation={2} className={classes.paper} onClick={handleClick}>
                    <img src={image_url} className={classes.imageCard} />
                    <Typography variant="h5" color="textPrimary">
                        {character_name}
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default CharacterCard