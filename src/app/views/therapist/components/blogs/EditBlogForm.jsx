import React, { useState, useEffect } from "react";
import { RichTextEditor, Breadcrumb } from "app/components/index";
import {
    Button,
  Grid,
    Icon,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import useAuth from "app/hooks/useAuth";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import clsx from "clsx";
import axios from "axios";
import history from "../../../../../history";
import { useLocation } from "react-router-dom";
import api from "app/services/api";

const useStyles = makeStyles((theme) => ({
  button: {
      margin: theme.spacing(1),
  },
  input: {
      display: 'none',
  },
}))

const EditBlogForm = () => {
    const classes = useStyles()
    const [entry, setEntry] = useState(/*{
      title: "",
      content: "",
      id: "",
      date: null,
      author: "",
      likes: [],
      comments: [],
      img: ""
    }*/{});

    const { user } = useAuth()

    useEffect(() => {        
        api.get("/b/" + bid)
            .then(res => {
                setEntry(res.data)
            })
            .then(() => {
                console.log(entry)
            })
    }, [])


    var imgPreview = (<div className="image-container">Seleccione una imagen para la vista previa</div>)

    if (entry?.img) {
      imgPreview = (<div className="image-container" ><img src={entry.img} alt="icon" width="200" /> </div>);
    }
    const search = useLocation().search
    const bid = new URLSearchParams(search).get("bid")

  
    const handleUpdateBlog = () => {
      // TODO: upload and update state.img with new image
      

      // TODO: Cambiar direccion a la de la api
      console.log(entry)
      api.put("/b/" + bid, {blogdata: {...entry}})
      history.push("/" + user.uid + "/myblogs");

    }

    const handleImgChange = event => {
      setEntry({
        ...entry,
        imgBlob: event.target.files[0],
      })

      let reader = new FileReader();

      reader.onloadend = () => {
          console.log(entry)
        setEntry({
          ...entry,
          img: reader.result,
        });
      }
      reader.readAsDataURL(event.target.files[0])
      imgPreview = (<div className="image-container" ><img src={entry.img} alt="icon" width="200" /> </div>);
    }

    const handleTitleChange = event => {
        setEntry({
            ...entry,
            title: event.target.value,
        })
    }

    const handleContentChange = contentHtml => {
      setEntry({
        ...entry,
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
        <ValidatorForm onSubmit={handleUpdateBlog}>
          <Grid container spacing={1}>
            <Grid item lg={12} md={12} sm={12} xs={12}>

              {/* 
                // TODO: Hacer más grande el texto del título
              */}
              <TextValidator
                className="mb-4 w-full"
                label="Titulo de la nueva entrada"
                onChange={handleTitleChange}
                value={entry?.title}
                type="text"
                name="title"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <RichTextEditor
                content={"" || entry?.content}
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

export default EditBlogForm;
