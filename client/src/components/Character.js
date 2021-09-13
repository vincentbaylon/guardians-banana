import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'

function Character() {
    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="center" spacing={0} >
                <Grid item className={classes.backgroundTwo} xs>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Character