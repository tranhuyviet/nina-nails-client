import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    aboutPage: {
        backgroundColor: theme.palette.common.white,
        width: '100%',
    },
    // HEADER
    headerContainer: {
        // height: '100vh',
    },
    image: {
        width: '100%',
        marginBottom: -5,
    },
    textContainer: {
        maxWidth: '500px',
    },
    text: {
        marginTop: 30,
        fontFamily: 'Work Sans',
    },

    // HISTORY
    historyContainer: {
        // backgroundColor: '#faefed',
    },
}));
