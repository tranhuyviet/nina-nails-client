import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.primary.main,
    },
    text: {
        fontFamily: 'Work Sans',
        fontSize: 16,
        color: theme.palette.common.white,
    },
    name: {
        fontWeight: 'bold',
    },
}));
