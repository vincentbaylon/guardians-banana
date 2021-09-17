import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import useStyles from './Styles'
import JoshuaImg from '../assets/characters/joshua-idle.png'

import CharacterCard from './CharacterCard'

function Character({ user, selectedChar, setSelectedChar }) {
    const history = useHistory()
    const classes = useStyles()
    const [characters, setCharacters] = useState([])
    const [oldChar, setOldChar] = useState(selectedChar)

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

    const handleClick = () => {
        fetch(`http://localhost:3000/user_characters/${user.id}`, {
            method: 'DELETE'
        })
        let body = { user_id: user.id, character_id: selectedChar.id }
        fetch(`http://localhost:3000/user_characters/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                history.goBack()
            })
    }

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" className={classes.characterGrid} spacing={0}>
                <Grid item className={classes.background} xs>
                    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row" spacing={0} className={classes.characterContainer}>
                        {characterData}

                        <Grid item xs={2} xl={2} style={{ textAlign: "center", opacity: '.5' }}>
                            <Paper variant="outlined" elevation={2} className={classes.paper} >
                                <img src={JoshuaImg} className={classes.imageCard} />
                                <Typography variant="h5" color="textPrimary">
                                    {"Joshua"}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" spacing={0}>
                        <Grid item xs style={{ textAlign: "center" }}>
                            <img src={selectedChar ? selectedChar.image_url : undefined} className={classes.image} />
                        </Grid>
                        <Grid item xs style={{ textAlign: "center" }}>
                            <Button variant="contained" color="secondary" size="large" onClick={handleClick}>{`Select ${selectedChar ? selectedChar.character_name : "A Character"}`}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Character