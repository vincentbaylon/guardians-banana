import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Logo from '../assets/guardians-logo.png'
import useStyles from './Styles'

function Login() {
    const classes = useStyles()
    const [login, setLogin] = useState(false)

    const handleClick = () => {
        setLogin(login => !login)
    }

    return (
        <>
            <form>
                <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column" className={classes.height}>
                    <Grid item>
                        <img src={Logo} className={classes.image} />
                    </Grid>

                    <Grid item>
                        <Typography variant="h2" color="textPrimary">
                            {login ? "Log In" : "Sign Up"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="username" label="Username" defaultValue="" />
                    </Grid>
                    <Grid item>
                        <TextField id="password" label="Password" defaultValue="" />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={login ? "primary" : "secondary"}>
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