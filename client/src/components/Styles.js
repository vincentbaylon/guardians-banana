import { makeStyles } from '@material-ui/core/styles'
import ForestBG from '../assets/forest-bg.png'
import Forest2BG from '../assets/forest2-bg.png'
import Blue from '../assets/blue-bg.png'
import Mushroom from '../assets/mushroom-bg.png'
import Pink from '../assets/pink-bg.png'
import Waterfall from '../assets/waterfall-bg.png'

const battleBackgrounds = [Blue, Mushroom, Pink, Waterfall]

const randomBackground = battleBackgrounds[Math.floor(Math.random() * battleBackgrounds.length)]

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center'
    },
    background: {
        backgroundImage: `url(${ForestBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        minWidth: '100vw',
    },
    backgroundTwo: {
        backgroundImage: `url(${randomBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: 'black' 
    },
    height: {
        minHeight: '100vh'
    },
    halfHeight: {
        minHeight: '100vh'
    },
    image: {
        width: '100%',
        height: '400px',
        maxHeight: '500px',
        objectFit: 'contain'
    },
    logo: {
        marginTop: '5vh',
        width: '100%',
        maxHeight: '500px'
    },
    imageCard: {
        width: '100%',
        height: '130px',
        objectFit: 'cover',
    },
    paper: {
        display: 'inline-block',
        width: '175px',
        height: '175px',
        margin: '5px',
        backgroundColor: 'firebrick'
    },
    characterContainer: {
        // width: '1250px'
    },
    demo: {
        width: '400px',
        backdropFilter: 'blur(4px)',
        textAlign: 'center',
        color: '#FCC201',
        borderRadius: '10px',
    },
    title: {
        marginTop: '10vh',
        margin: theme.spacing(4, 0, 2),
        color: "#FCC201"
    },
    navbar: {
        backgroundColor: 'gray'

    },
    characterGrid: {
        marginTop: '6vh',
        minHeight: '50vh'
    },
    skillsContainer: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
    },
    battleAlert: {
        margin: "auto", 
        justifyContent: "center", 
        textAlign: "center", 
        alignItems:"center", 
        alignContent: "center", 
        width: "75%", 
        backgroundColor: "black" 
    }
}))

export default useStyles