import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card: {
        width: 300,
    },
    cardMedia: {
        height: 300,
    },
    price: {
        fontWeight: 'bold',
    },
    cardActions: {
        justifyContent: 'center',
        padding: 16,
        borderTop: '1px solid',
        borderTopColor: theme.palette.grey[200],
    },
}));
