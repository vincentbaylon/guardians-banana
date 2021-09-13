import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'
import Knight from '../assets/knight-idle.png'

function Account() {
    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item className={classes.background} xs>
                    <Grid container spacing={0} justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.height}>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>
                            <img src={Knight} className={classes.image} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" size="large">Start Battle!</Button>
                        </Grid>
                        <Grid container spacing={0} alignItems="center" alignContent="center" justifyContent="center" className={classes.height}>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs={3} style={{textAlign: "center"}}>
                                <Button variant="contained" color="primary" size="large">Create A Character</Button>
                            </Grid>
                            <Grid item xs>
                                
                            </Grid>
                            <Grid item xs={3} style={{textAlign: "center"}}>
                                <Button variant="contained" color="primary" size="large">Select A Character</Button>
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