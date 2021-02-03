import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    gallerySection: {
        backgroundColor: theme.palette.common.white,
        textAlign: 'center',
        padding: '40px 0px',
    },
    gridContainer: {
        marginTop: 40,
        padding: '0 10%',
    },
    gridItem: {
        padding: 10,
        position: 'relative',
    },
    image: {
        display: 'block',
        width: '100%',
        transition: 'all 0.3s linear',
        '&:hover': {
            cursor: 'pointer',
            filter: 'brightness(0.6)',
            boxShadow: theme.shadows[3],
        },
    },
    icon: {
        fontSize: 60,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: theme.palette.common.white,
        zIndex: 10,
    },
}));
