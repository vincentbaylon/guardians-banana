import { makeStyles } from '@material-ui/core/styles'
import ForestBG from '../assets/forest-bg.png'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${ForestBG})`,
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
        maxWidth: '750px'
    }
}))

export default useStyles