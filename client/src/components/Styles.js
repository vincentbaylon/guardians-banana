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
        minHeight: '100vh'
    },
    image: {
        width: '100%',
        height: '400px',
        maxHeight: '500px'
    },
    logo: {
        width: '100%',
        maxHeight: '500px'
    },
    imageCard: {
        width: '100%',
        height: '150px',
        objectFit: 'cover'
    },
    paper: {
        background: 'white',
        display: 'inline-block',
        width: '200px',
        height: '200px'
    },
    characterContainer: {
        width: '1250px'
    }
}))

export default useStyles