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
    imageContainer: {
        width: 500,
        height: 460,
        padding: 20,
        border: '1px solid',
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.common.white,
        marginRight: 50,
        marginBottom: 100,
    },
    image: {
        width: '100%',
    },
    gridRight: {
        height: '100vh',
    },
    rightContainer: {
        maxWidth: 600,
        paddingLeft: 100,
    },
    // title: {
    //     fontSize: 51,
    //     fontFamily: 'Crimson Text',
    //     fontWeight: 'bold',
    //     marginBottom: 16,
    // },
    subTitle: {
        fontSize: 23,
        fontFamily: 'Crimson Text',
        fontStyle: 'italic',
        marginTop: 20,
    },
    text: {
        marginTop: 10,
        fontFamily: 'Work Sans',
        marginBottom: 14,
    },
}));
