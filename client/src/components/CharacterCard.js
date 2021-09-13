import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import useStyles from './Styles'

function CharacterCard({ character }) {
    const { character_name } = character
    const classes = useStyles()

    return (
        <>
            <Grid item>
                {/* <img src={} className={classes.imageCard}/> */}
                <Typography variant="h2">
                    {character_name}
                </Typography>
            </Grid>
        </>
    )
}

export default CharacterCard