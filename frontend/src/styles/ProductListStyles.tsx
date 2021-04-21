import { makeStyles, Theme } from "@material-ui/core";

export const useProductListStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '75%',
        margin: 'auto',
        marginTop: '150px',
        borderRadius: '10px',
        paddingBottom: '20px'
    },
    item: {
        width: '33.33%',
        textAlign: 'left',
        fontSize: '30px',
        fontWeight: 'bold',
        paddingLeft: '25px',
        paddingBottom: '10px'
    },
    header: {
        marginLeft: '25px',
        fontSize: '35px',
        color: theme.palette.primary.main
    }
}));