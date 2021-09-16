import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'
import Knight from '../assets/knight-idle.png'

function Account({ user, selectedChar, onLogout, setEnemy, enemy }) {
    const history = useHistory()
    const classes = useStyles()
    
    

    const handleSelectClick = () => { history.push('/character') }
    const handleEditClick = () => {  }
    const handleLogoutClick = () => { 
        fetch('http://localhost:3000/logout', {
            method: 'DELETE'
        })
        .then(onLogout)
    }
    const handleBattleClick = () => { history.push('/battle')}

    const handleScoreClick = () => { history.push('/high_scores') }

    useEffect(() => {
        fetch(`http://localhost:3000/enemy`).then(r => r.json()).then(data => setEnemy(data))
    }, [])
    return (
        <>
            {console.log(user)}
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item xs={12} className={classes.background}>
                    <Grid container spacing={0} justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.halfHeight}>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <div style={{ background: 'white', padding: '10px' }}>
                                <Typography variant="h2">
                                    {user ? user.username : "Welcome, stranger..."}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid container spacing={0} alignItems="center" alignContent="center" justifyContent="center" >
                            <Grid item xs>

                            </Grid>
                            <Grid item xs={6} style={{ textAlign: "center" }}>
                                <Button variant="contained" color="primary" size="large" onClick={handleEditClick}>Edit Account</Button>
                            </Grid>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs={6} style={{ textAlign: "center" }}>
                                <Button variant="contained" color="primary" size="large" onClick={handleLogoutClick}>Logout</Button>
                            </Grid>
                            <Grid item xs>

                            </Grid>
                        </Grid>

                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <img src={selectedChar ? selectedChar.image_url : undefined} className={classes.image} />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Button variant="contained" color="secondary" size="large" onClick={handleBattleClick}>Start Battle!</Button>
                        </Grid>
                        <Grid container spacing={0} alignItems="center" alignContent="center" justifyContent="center" >
                            <Grid item xs>

                            </Grid>
                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                <Button variant="contained" color="primary" size="large" onClick={handleScoreClick}>High Scores</Button>
                            </Grid>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                <Button variant="contained" color="primary" size="large" onClick={handleSelectClick}>Select A Character</Button>
                            </Grid>
                            <Grid item xs>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Account