import { makeStyles } from '@material-ui/core/styles';
import aboutBg from '../../images/bg2.webp';

export const useStyles = makeStyles((theme) => ({
    aboutSection: {
        height: '100vh',
        backgroundImage: `url(${aboutBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    image: {
        paddingBottom: 110,
        marginRight: 50,
    },
    gridRight: {
        height: '100vh',
    },
    rightContainer: {
        maxWidth: 600,
        paddingLeft: 100,
    },
    title: {
        fontSize: 51,
        fontFamily: 'Crimson Text',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subTitle: {
        fontSize: 23,
        fontFamily: 'Crimson Text',
        fontStyle: 'italic',
        marginBottom: 20,
    },
    text: {
        fontFamily: 'Work Sans',
        marginBottom: 32,
    },
}));
