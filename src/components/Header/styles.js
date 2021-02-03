import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../../images/bg-img-1.webp';
export const useStyles = makeStyles((theme) => ({
    header: {
        maxWidth: '100vw',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    gridContainer: {
        height: '100%',
        paddingLeft: '8%',
    },
    textContainer: {
        width: '38%',
    },
    title: {
        fontSize: 72,
        fontFamily: 'Crimson Text',
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
