import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    checkoutPage: {
        minHeight: 'calc(100vh - 130px)',
        marginTop: '120px',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        width: 600,
        margin: '0 auto',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
