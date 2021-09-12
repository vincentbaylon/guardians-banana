import { Grid } from '@material-ui/core'
import { GridList } from '@material-ui/core'
import { GridListTile } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useStyles from './Styles'
import Knight from '../assets/knight-idle.png'

function Account() {
    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent="center" alignContent="center" direction="column" alignItems="flex-end" >
                <Grid item className={classes.background} >
                    <GridList cols={3}>
                        <GridListTile>
                            <Grid container justifyContent="center" alignContent="center" alignItems="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary" size="large">Create A Character</Button>
                                </Grid>
                            </Grid>
                        </GridListTile>
                        <GridListTile>
                            <Grid container justifyContent="center" alignItems="center" >
                                <Grid item>
                                    <img src={Knight} />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" size="large">Start Battle!</Button>
                                </Grid>
                            </Grid>
                        </GridListTile>
                        <GridListTile>
                            <Button variant="contained" color="primary" size="large">Select A Character</Button>
                        </GridListTile>
                    </GridList>
                </Grid>
            </Grid>
        </>
    )
}

export default Account