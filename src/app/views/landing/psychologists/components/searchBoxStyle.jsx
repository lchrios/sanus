import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

const CssTextField = withStyles({
    root: {
        backgroundColor: '#fcfcfb',
      '& label.Mui-focused': {
        color: '#6C63FF',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

export default function SearchBox() {
    const classes = useStyles();
  
    return (
      <form>
        <CssTextField
          className={classes.margin}
          label="Buscar"
          fullWidth
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </form>
    )
  }