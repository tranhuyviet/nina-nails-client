import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: `${theme.palette.primary.main}!important`,
        borderRadius: '100px!important',
        color: `${theme.palette.common.white}!important`,
        padding: '16px 40px!important',
        textTransform: 'capitalize!important',
        fontFamily: 'Work Sans, san-serif!important',
        fontSize: '18px!important',
        '&:hover': {
            backgroundColor: `${theme.palette.grey[800]}!important`,
        },
    },
}));
