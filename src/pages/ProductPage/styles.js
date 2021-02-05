import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    productPage: {
        backgroundColor: theme.palette.common.white,
        textAlign: 'center',
        minHeight: 'calc(100vh - 130px)',
    },
    gridContainer: {
        padding: '40px 10%',
    },
    categoryContainer: {
        textAlign: 'left',
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    // productsContainer: {
    //     padding: '16px ',
    // },
    cardContainer: {
        padding: 16,
    },
    searchBarContainer: {
        // background: '#faefed',
        padding: '0px 16px',
    },
    searchBar: {
        background: '#faefed',
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        position: 'relative',

        width: 400,
    },
    searchInput: {
        padding: '4px 16px 4px 35px',
        width: '100%',
        height: 40,
        borderRadius: 100,
        border: `1px solid ${theme.palette.primary.main}`,
        outline: 'none',
        fontSize: 16,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 9,
        color: theme.palette.primary.main,
    },
    sortContainer: {
        display: 'flex',
        alignItems: 'center',
    },
}));
