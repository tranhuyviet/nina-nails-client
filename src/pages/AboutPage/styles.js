import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    aboutPage: {
        backgroundColor: theme.palette.common.white,
    },

    // HEADER
    headerContainer: {
        // height: 'calc(100vh - 130px)',
        // paddingTop: 40,
        // maxWidth: 1024,
        // margin: '0 auto',
    },
    image1: {
        display: 'block',
        borderRadius: 50,
        boxShadow: theme.shadows[5],
        maxWidth: 500,
    },
    image2: {
        display: 'block',
        maxWidth: 550,
        boxShadow: theme.shadows[5],
        borderRadius: 50,
    },
    textContainer: {
        maxWidth: '500px',
        // color: theme.palette.common.white,
    },
    text: {
        marginTop: 30,
        fontFamily: 'Crimson Text',
        fontSize: 18,
    },

    // HISTORY
    historyContainer: {
        // backgroundColor: '#faefed',
        padding: '40px 0 80px',
    },
}));
