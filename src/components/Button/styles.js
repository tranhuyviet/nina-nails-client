import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '100px',
        color: theme.palette.common.white,
        padding: '16px 40px',
        textTransform: 'capitalize',
        fontFamily: 'Work Sans, san-serif',
        fontSize: 18,
        '&:hover': {
            backgroundColor: theme.palette.grey[800],
        },
    },
}));
