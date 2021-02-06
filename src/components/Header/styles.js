import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../../images/bg.webp';
export const useStyles = makeStyles((theme) => ({
    header: {
        maxWidth: '100vw',
        height: 'calc(100vh - 80px)',
        position: 'relative',
    },
    headerContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        filter: 'brightness(0.6)',
    },

    gridContainer: {
        height: '100%',
        paddingLeft: '8%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 11,
        color: theme.palette.common.white,
    },
    textContainer: {
        width: '38%',
        filter: 'brightness(1)',
    },
    title: {
        fontSize: 72,
        // fontFamily: 'PT Serif, sans-serif',
        fontFamily: 'Crimson Text, serif',
        fontWeight: 600,
        lineHeight: 1.15,
    },
    subtitle: {
        fontFamily: 'Work Sans, sans-serif',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 2,
    },
}));
