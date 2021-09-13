import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'

import CharacterCard from './CharacterCard'

function Character() {
    const classes = useStyles()
    const [characters, setCharacters] = ([])

    useEffect(() => {
        fetch('http://localhost:3000/characters')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    const characterData = characters.map((eachChar) => {
        return <CharacterCard key={eachChar.id} character={eachChar} />
    })

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item className={classes.backgroundTwo} xs>
                    {characterData}
                </Grid>
            </Grid>
        </>
    )
}

export default Character