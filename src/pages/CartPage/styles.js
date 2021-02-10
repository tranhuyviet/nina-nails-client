import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cartPage: {
        minHeight: 'calc(100vh - 130px)',
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,
    },
    cartItemContainer: {
        width: 910,
        margin: '0 auto',
    },
    total: {
        width: 250,
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
}));
