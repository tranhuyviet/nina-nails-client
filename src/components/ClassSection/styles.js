import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    classSection: {
        // minHeight: '100vh',
        position: 'relative',
        // backgroundColor: '#f3f4f9',
        backgroundColor: '#faefed',
        padding: '24px 0',
    },
    // bgImage: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: '50%',
    //     transform: 'translateX(-50%)',
    // },
    gridContainer: {
        padding: '5% 10%',
    },
    imageContainer: {
        width: '90%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        backgroundColor: theme.palette.common.white,
        textAlign: 'center',
        paddingTop: 24,
    },
    title1: {
        fontSize: 51,
        fontFamily: 'Crimson Text',
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 30,
        fontFamily: 'Crimson Text',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    date: {
        fontFamily: 'Work Sans, san-serif',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    ul: {
        listStyle: 'none',
        padding: 0,
    },
    li: {
        fontFamily: 'Crimson Text',
        fontSize: 20,
    },
}));
