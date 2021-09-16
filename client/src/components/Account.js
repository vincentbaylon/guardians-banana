import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import useStyles from './Styles'
import Knight from '../assets/knight-idle.png'
import Form from './Form'

function Account({ user, setUser, selectedChar, onLogout }) {
    const history = useHistory()
    const classes = useStyles()

    const handleSelectClick = () => { history.push('/character') }
    const handleEditClick = () => { }
    const handleLogoutClick = () => {
        fetch('http://localhost:3000/logout', {
            method: 'DELETE'
        })
            .then(onLogout)
    }
    const handleBattleClick = () => { history.push('/battle') }
    const handleScoreClick = () => { history.push('/high_scores') }

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item xs={12} className={classes.background}>
                    <Grid container spacing={0} justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.halfHeight}>
                        <Card>
                            <Card content style={{ backgroundColor: "white" }}>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <div style={{ padding: '10px', backdropFilter: 'blur(4px)', borderRadius: '5px' }}>
                                        <Form user={user} setUser={setUser} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <img src={selectedChar ? selectedChar.image_url : undefined} className={classes.image} />
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