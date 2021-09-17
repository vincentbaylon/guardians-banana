import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import useStyles from './Styles'
import Knight from '../assets/knight-idle.png'
import Form from './Form'

function Account({ user, selectedChar, onLogout, setEnemy, setUser, }) {
    const history = useHistory()
    const classes = useStyles()

    useEffect(() => {
        fetch(`http://localhost:3000/enemy`).then(r => r.json()).then(data => setEnemy(data))
    }, [])
    return (
        <>
            {console.log(user)}
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item xs={12} className={classes.background}>
                    <Grid container spacing={0} justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.halfHeight}>
                        <Card>
                            <Card content style={{ backgroundColor: "white", marginTop: '20px' }}>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    {selectedChar ?
                                        <img src={`${process.env.PUBLIC_URL}/animated/${selectedChar.character_name?.toString().toLowerCase()}-idle.png`} className={classes.image} /> :
                                        <Typography variant="h5">
                                            Select a character
                                        </Typography>
                                    }
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <div style={{ padding: '5px', backdropFilter: 'blur(4px)', borderRadius: '5px' }}>
                                        <Form user={user} setUser={setUser} onLogout={onLogout} />
                                    </div>
                                </Grid>
                            </Card>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Account