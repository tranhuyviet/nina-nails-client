import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navbar: {
        height: 80,
        backgroundColor: theme.palette.common.white,
        boxShadow: 'none',
    },
    toolbar: {
        height: 80,
    },
    link: {
        textDecoration: 'none',
        fontSize: 16,
        fontFamily: 'Work Sans, sans-serif',
        margin: '0 26px',
        color: theme.palette.common.black,
        fontWeight: 600,
        transition: 'all 0.3s linear',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    linkActive: {
        color: theme.palette.primary.main,
    },
}));
