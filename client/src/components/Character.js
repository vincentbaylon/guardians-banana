import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'

import CharacterCard from './CharacterCard'

function Character() {
    const classes = useStyles()
    const [characters, setCharacters] = useState([])
    const [selectedChar, setSelectedChar] = useState({character_name: "A Character"})

    useEffect(() => {
        fetch('http://localhost:3000/characters')
            .then(res => res.json())
            .then(data => {
                setCharacters(data)
            })
    }, [])

    const characterData = characters.map((eachChar) => {
        return <CharacterCard key={eachChar.id} character={eachChar} setSelectedChar={setSelectedChar} />
    })

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" className={classes.height} spacing={0}>
                <Grid item className={classes.backgroundTwo} xs>
                    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={1} className={classes.characterContainer} xs={12}>
                        {characterData}
                    </Grid>
                    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" spacing={1}>
                        <Grid item xs style={{ textAlign: "center" }}>
                            <img src={selectedChar.image_url} className={classes.image} />
                        </Grid>
                        <Grid item xs style={{ textAlign: "center" }}>
                            <Button variant="contained" color="secondary" size="large">{`Select ${selectedChar.character_name}`}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Character