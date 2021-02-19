import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    classPage: {
        backgroundColor: theme.palette.common.white,
        textAlign: 'center',
        minHeight: 'calc(100vh - 130px)',
    },
    gridContainer: {
        marginTop: 30,
        padding: '0px 40px',
    },
    gridItem: {
        marginBottom: 50,
    },
    paper: {
        padding: 10,
    },
    image: {
        display: 'block',
        width: '100%',
    },
}));
