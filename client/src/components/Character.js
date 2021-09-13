import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'

import CharacterCard from './CharacterCard'

function Character() {
    const classes = useStyles()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/characters')
            .then(res => res.json())
            .then(data => {
                setCharacters(data)
            })
    }, [])

    const characterData = characters.map((eachChar) => {
        return <CharacterCard key={eachChar.id} character={eachChar} />
    })

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" >
                <Grid item className={classes.backgroundTwo} xs>
                    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={3} className={classes.characterContainer}>
                        {characterData}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Character