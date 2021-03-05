import React, { useState } from "react";
import { RichTextEditor } from "app/components/index";
import {
  Button,
  Grid,
  Icon,
} from "@material-ui/core";
import {IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useAuth from "app/hooks/useAuth";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Tooltip from '@material-ui/core/Tooltip'
import debounce from '../helpers.js'
import api from "app/services/api";
import { update } from "lodash";
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
      title: "",
      img : "",
      imgBlob: "",
      content: '',
    });
  
    const [addingNote, setAddingNote] = useState(true);
    const { user } = useAuth()

    // const handleSubmitNewBlog = () => {
    //   // TODO: upload and update state.img with new image
      
    //   const demoimg = [
    //     "https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F1.jpg?alt=media&token=514d6471-8353-421c-9b8e-f9d51216eaf4",
    //     "https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F2.jpg?alt=media&token=b62b18d7-c8f4-434e-9b47-3dd5b87769e7",
    //     "https://firebasestorage.googleapis.com/v0/b/iknelia-3cd8e.appspot.com/o/blogs%2F3.jpg?alt=media&token=763f7190-0993-4f72-a20f-cbc0a1130cbf",
    //   ]
    //   var blogdata = {
    //     title: state.title, 
    //     content: state.content, 
    //     date: firebase.firestore.Timestamp.fromDate(new Date()), 
    //     author: user.uid, 
    //     likes: [], 
    //     comments: [], 
    //     img: demoimg[Math.floor(Math.random() * 3)],
    //   }

    //   // TODO: Cambiar direccion a la de la api
    //   api.post("/b/new", {blogdata: {...blogdata}})
    //     .then(() => {
    //       history.push("/" + user.uid + "/myblogs");
    //     });

    // }


    const handleTitleChange = event => {
      setState({
        ...state,
        title: event.target.value,
      })
    }
    
    
    // const update = debounce( () => {
    //   console.log('ACTUALIZANDO')
    // },1500)
    const handleContentChange = async(val) => {
      await setState({content:val})
      update()
    };
    const update = debounce(()=>{
      console.log('jaja pero se hace mucho o sea no sirve ')
    },1500);
    
    return (
      <div className="m-sm-30">
        <ValidatorForm>
          <Grid flex  container spacing={1}>
            <Grid  item lg={12} md={12} sm={12} xs={12}>
              <h1></h1>
              {/* <TextValidator
                className="mb-4 w-full"
                label="Ingresa el título de la nota"
                onChange={handleTitleChange}
                type="text"
                name="title"
                style={{display: addingNote ? 'block' : 'none'}}
              /> */}
            </Grid>
              <Grid style={{display: addingNote ? 'block' : 'none'}} item lg={12} md={12} sm={12} xs={12}>
                <ReactQuill
                value={state.content}
                onChange={handleContentChange}/>
                {/* <RichTextEditor
                  content={state.content}
                  handleContentChange={handleContentChange}
                  /> */}
                  <Tooltip title='¿Necesitas ayuda?'>
                  <IconButton>
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
