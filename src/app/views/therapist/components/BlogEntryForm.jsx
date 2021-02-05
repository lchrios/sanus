import React, { useState } from "react";
import { RichTextEditor, Breadcrumb } from "app/components/index";
import {
    Button,
  Grid,
    Icon,
} from "@material-ui/core";
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles'
import useAuth from "app/hooks/useAuth";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import clsx from "clsx";
import axios from "axios";
import history from "../../../../history";

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))

const BlogEntryForm = () => {
    const classes = useStyles()
    const [state, setState] = useState({
      title: "",
      img : "",
      imgBlob: "",
      content: `<h1>Iknelia | Crea tu propio post</h1><p><a href="http://localhost:3000/dashboard/analytics" target="_blank">en Iknelia</a><p>`,
    });


    

    const { user } = useAuth()

    var imgPreview = (<div className="image-container">Seleccione una imagen para la vista previa</div>)

    if (state.img) {
      imgPreview = (<div className="image-container" ><img src={state.img} alt="icon" width="200" /> </div>);
    }

    const handleSubmitNewBlog = () => {
      // TODO: upload and update state.img with new image
      var blogdata = {
        title: state.title, 
        content: state.content, 
        date: firebase.firestore.Timestamp.fromDate(new Date()), 
        author: user.uid, 
        likes: [], 
        comments: [], 
        img: state.img,
      }

      axios.post("https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/b/new", blogdata)
        .then(res => {
          console.log(res)
          history.push("/" + user.uid + "/myblogs");
        });

    }

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

    const handleTitleChange = contentTitle => {
      setState({
        ...state,
        title: contentTitle,
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
          <Breadcrumb
            routeSegments={[
              { name: "Blogs", path: "/" + user.uid + "/myblogs" },
              { name: "Nueva entrada" }
            ]}
          />
        </div>
        <ValidatorForm>
          <Grid flex justify="flex-end"  container spacing={1}>
            <Grid  item lg={12} md={12} sm={12} xs={12}>

              {/* 
                // TODO: Hacer más grande el texto del título
              */}
              <TextValidator
                className="mb-4 w-full"
                label="Titulo de la nueva entrada"
                onChange={handleTitleChange}
                type="text"
                name="title"
                validators={[
                    'required'
                ]}
                errorMessages={['Este campo es necesario']} 
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <RichTextEditor
                content={state.content}
                handleContentChange={handleContentChange}
                placeholder="Escribe aquí..."
              />
            </Grid> 
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* 
               // TODO: image uploading
              */}
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
              // TODO: Alinear correctamente el boton al final derecho de la pantalla
            */}
            <Grid item flex lg={6} md={6} sm={12} xs={12}>
              <Button
                className={clsx("uppercase ml-auto", classes.button)}
                size="large"
                color="primary" 
                variant="contained" 
                type="submit"
                onClick={() => {
                  // TODO: subir a bd
                  handleSubmitNewBlog()
                }}
                >
                <Icon>send</Icon>
                <span className="pl-8 capitalize">Publicar</span>
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    )
}

export default BlogEntryForm;
