import React, { useState } from "react";
import { RichTextEditor, Breadcrumb } from "app/components/index";
import {
    Button,
  Grid,
    Icon,
} from "@material-ui/core";
import {IconButton} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import useAuth from "app/hooks/useAuth";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Tooltip from '@material-ui/core/Tooltip'
import clsx from "clsx";
import history from "../../../../../../history";
import api from "app/services/api";

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))



const TextForm = () => {
  
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
  /**
   * *TODO Arreglar que cuando el usuario entre a notas alv ya esté listo el editor con el cursor parpadeando, porque está medio raro como está la neta
   * por eso le puse todo eso al state.content de acontinuación
   */
    const classes = useStyles()
    const [state, setState] = useState({
      title: "",
      img : "",
      imgBlob: "",
      content: `<h1>Iknelia | Aplicación de notas </h1><p><a href="http://localhost:3000/dashboard/analytics" target="_blank">Escribe tu nota aquí</a><p>`,
    });
  
    const [addingNote, setAddingNote] = useState(false);
    const { user } = useAuth()

    var imgPreview = (<div className="image-container">Seleccione una imagen para la vista previa</div>)

    if (state.img) {
      imgPreview = (<div className="image-container" ><img src={state.img} alt="icon" width="200" /> </div>);
    }

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

    const handleImgChange = event => {
      setState({
        ...state,
        imgBlob: event.target.files[0],
      })

      let reader = new FileReader();

      reader.onloadend = () => {
        setState({
          ...state,
          img: reader.result,
        });
      }
      reader.readAsDataURL(event.target.files[0])
      imgPreview = (<div className="image-container" ><img src={state.img} alt="icon" width="200" /> </div>);
    }

    const handleTitleChange = event => {
      setState({
        ...state,
        title: event.target.value,
      })
    }

    const handleContentChange = contentHtml => {
      setState({
        ...state,
        content: contentHtml,
      });
    };

    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Button 
          variant="contained" 
          color="secondary"
          onClick={() => history.push('/' + user.uid + '/dashboard')}
          >
              Volver al escritorio
          </Button>
        </div>
        <ValidatorForm>
          <Grid flex justify="flex-end"  container spacing={1}>
            <Grid  item lg={12} md={12} sm={12} xs={12}>

              {/* 
                // TODO: Hacer más grande el texto del título
              */}
              <TextValidator
                className="mb-4 w-full"
                label="Ingresa el título de la nota"
                onChange={handleTitleChange}
                type="text"
                name="title"
                style={{display: addingNote ? 'block' : 'none'}}
              />
            </Grid>
            {/**
             * *? Si meto el tooltip dentro de un grid (en este caso con render condicional) lo que pasa es que da un error keria explicarlo me dio hueva adios 
             */}
            
              <Grid style={{display: addingNote ? 'block' : 'none'}} item lg={12} md={12} sm={12} xs={12}>
                <RichTextEditor
                  content={state.content}
                  handleContentChange={handleContentChange}
                  placeholder="creo que ni se ve alv"
                  />
                  <Tooltip title='Elimina el texto color azul suave (el más pequeño) o continúa escribiendo a partir de allí'>
                  <IconButton>
                    <Icon>help</Icon>
                  </IconButton>
                </Tooltip>
                </Grid>
             
           {/* <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* 
             
              
              <input
                    accept="image/*"
                    className={classes.input}
                    id="text-button-file"
                    onChange={handleImgChange}
                    type="file"
                />
                <label htmlFor="text-button-file">
                    
                    <Button component="span" size={"large"} color={"secondary"} variant={"contained"} className={classes.button}>
                        <Icon>upload</Icon>Upload
                    </Button>
                    { imgPreview }
                </label>
            </Grid>

            {/* 
            
            */}
            {/* <Grid item flex lg={6} md={6} sm={12} xs={12}>
              <Button
                className={clsx("uppercase ml-auto", classes.button)}
                size="large"
                color="primary" 
                variant="contained" 
                type="submit"
                onClick={() => {
                  
                  handleSubmitNewBlog()
                }}
                >
                <Icon>send</Icon>
                <span className="pl-8 capitalize">Publicar</span>
              </Button>
            </Grid>  */}
          </Grid>
        </ValidatorForm>
      </div>
    )
}

export default TextForm;
