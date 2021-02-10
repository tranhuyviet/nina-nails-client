import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cartItem: {
        border: '1px solid',
        borderColor: theme.palette.grey[400],
        padding: '10px 0',
        borderBottom: 'none',
        '&:last-child': {
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.grey[400],
        },
    },
    quantityContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 160,
        alignItems: 'center',
    },
    quantityText: {
        padding: '0 10px',
    },
    totalText: {
        width: 100,
        fontWeight: 'bold',
    },
}));
