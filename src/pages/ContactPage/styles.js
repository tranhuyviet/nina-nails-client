import { makeStyles } from '@material-ui/core/styles';
import contactBg from '../../images/bg4.webp';

export const useStyles = makeStyles((theme) => ({
    contactPage: {
        height: 'calc(100vh - 130px)',
        backgroundColor: theme.palette.common.white,
        backgroundImage: `url(${contactBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
    },
    paper: {
        maxWidth: 900,
    },
    input: {
        marginTop: 20,
    },
    icon: {
        fontSize: 32,
        color: theme.palette.primary.main,
        marginRight: 8,
    },
    text: {
        fontFamily: 'Work Sans',
        fontSize: 16,
        textAlign: 'left',
    },
    infoContainer: {
        padding: '20px 20px 20px 16px',
        borderLeft: '1px solid ', // #faefed',
        borderColor: theme.palette.grey[200],
    },
    infoGroup: {
        marginBottom: 16,
    },
    formContainer: {
        padding: 20,
    },
    socialIcon: {
        fontSize: 50,
        // color: theme.palette.primary.main,
        color: theme.palette.grey[600],
        transition: 'all 0.3s linear',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
}));
