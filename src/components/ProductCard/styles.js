import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: 'none',
        border: '1px solid',
        borderColor: theme.palette.grey[200],
        transition: 'all 0.3s linear',
        '&:hover': {
            boxShadow: theme.shadows[3],
        },
    },
    cardMedia: {
        // minHeight: 300,
        // width: '100%',
        height: 300,
        width: 'auto',
    },
    cardContent: {
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingBottom: 0,
        textAlign: 'left',
    },
    name: {
        fontFamily: 'Crimson Text',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    price: {
        // color: theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 16,
    },
}));
