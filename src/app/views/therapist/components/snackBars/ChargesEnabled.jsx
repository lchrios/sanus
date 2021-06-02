import react from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export default function ChargesEnabled() {
    const classes = useStyles();
    

    return (
        <div className={classes.root}>
            <Alert severity="success"> Puedes recibir ingresos</Alert>
        </div>
    )
}