import { makeStyles } from '@material-ui/core/styles'
import ForestBG from '../assets/forest-bg.png'
import Forest2BG from '../assets/forest2-bg.png'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${ForestBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
    },
    backgroundTwo: {
        backgroundImage: `url(${Forest2BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
    },
    height: {
        minHeight: '50vh'
    },
    image: {
        width: '100%',
        maxWidth: '750px'
    }
}))

export default useStyles