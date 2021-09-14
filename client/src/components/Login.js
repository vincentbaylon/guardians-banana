import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Logo from '../assets/guardians-logo.png'
import useStyles from './Styles'

function Login() {
    const classes = useStyles()
    const history = useHistory()
    const [login, setLogin] = useState(true)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()
    

    const handleClick = () => {
        setLogin(login => !login)
    }

    const handleLogin = () => {
        const userCred = {
            username: userName,
            password: password
        }
        let url = ''
        login ? url = "login" : url = "users"
        fetch(`http://localhost:3000/${url}`, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify(userCred)
        }).then(r => r.json()).then(data => {
            if (data.error === undefined){
                setUser(data)
                history.push('/account')
            }else{
                alert(data.error)
            }
        })
    }

    return (
        <>
            <form>
                <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column" className={classes.height}>
                    <Grid item>
                        <img src={Logo} className={classes.logo} />
                    </Grid>

                    <Grid item>
                        <Typography variant="h2" color="textPrimary">
                            {login ? "Log In" : "Sign Up"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField onChange={(e) => setUserName(e.target.value)} id="username" label="Username" defaultValue="" />
                    </Grid>
                    <Grid item>
                        <TextField onChange={(e) => setPassword(e.target.value)} id="password" label="Password" defaultValue="" />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={login ? "primary" : "secondary"} onClick={handleLogin}>
                            {login ? "Log In" : "Sign Up"}
                        </Button>
                    </Grid>
                    <Grid item direction="row">
                        {login ? "No account?" : "Already have an account?"}
                        <Button variant="text" color={login ? "secondary" : "primary"} size="small" onClick={handleClick}>
                            {login ? "Sign Up" : "Log In"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Login