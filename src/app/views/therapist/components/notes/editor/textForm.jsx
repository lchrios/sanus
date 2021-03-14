import React, { useState } from "react";
import {
  Grid,
  Icon,
} from "@material-ui/core";
import {IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useAuth from "app/hooks/useAuth";
import { ValidatorForm } from 'react-material-ui-form-validator';
import Tooltip from '@material-ui/core/Tooltip'
import debounce from '../helpers.js'
import ReactQuill from "react-quill";

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))



const TextForm = () => {
  
    const classes = useStyles()
    const [state, setState] = useState({
      content: '',
    });
  
    const { user } = useAuth()

    const handleContentChange = async(val) => {
      await setState({content:val})
      update()
    };
    const update = debounce(()=>{
    },1500);
    
    return (
      <div className="m-sm-30">
        <ValidatorForm >
          <Grid container spacing={1}>
            <Grid  item lg={12} md={12} sm={12} xs={12}>
            </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <ReactQuill
                value={state.content}
                onChange={handleContentChange}/>
                  <Tooltip title='¿Necesitas ayuda?'>
                  <IconButton className={classes.button}>
                    <Icon>help</Icon>
                  </IconButton>
                </Tooltip>
                </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    )
}

export default TextForm;
