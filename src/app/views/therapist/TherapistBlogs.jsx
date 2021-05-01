import React, { useState, useEffect } from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    IconButton,
    Icon,
    Button,
    Fab,
} from '@material-ui/core'
import history from "../../../history"
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import axios from 'axios'
import api from 'app/services/api'
import { Loading } from 'app/components/Loading/Loading'
import parse from "html-react-parser";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cart: {
        minWidth: 900,
        overflowX: 'scroll',
    },
    button: {
        margin: theme.spacing(1),
    },
    cardLoading: {
        minWidth:200,
        borderRadius: 12,
        margin: '1rem',
    },
    delete: {
        background: palette.error.main,
        color: palette.error.contrastText
    }
}))

const titles_data = [
    {t: "Peligros del abuso de la PC"},
    {t: "La decoracion: un reflejo de nuestra mente"},
    {t: "El metro y la música: efecto sobre las personas"},
    {t: "Sonoroterapia: terapia con sonidos calmantes"}
];

const TherapistBlogs = () => {
    const [blogs, setBlogs] = useState()
    const [titles, setTitles] = useState(titles_data)
    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState()

    const { user } = useAuth()
    const classes = useStyles()

    useEffect(() => {
        api.get("/t/" + user.uid + "/b")
            .then(res => {
                console.log(res.data)
                setBlogs(res.data)
                setLoading(false)
            })
            .then(() => console.log("Blogs descargados"))
    }, [])

    return (
        <Card elevation={3} className={clsx('m-sm-30', classes.cart)}>
            <div className="py-4 px-4">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className="mb-4 x-center"
                    onClick={() => history.push('/' + user.uid + '/dashboard')}
                    >
                        Volver al escritorio
                    </Button>
                <div className="flex items-center mb-4 px-4">
                        <TextField
                            variant="outlined"
                            placeholder="Buscar por título"
                            className="flex-grow"
                            size="small"
                        ></TextField>
                        <Button
                            className="mx-3"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                // TODO: search function
                            }}
                        >
                            <Icon className="mr-3">search</Icon>
                            Buscar
                        </Button>
                        <Button
                            className="mx-3"
                            variant="contained"
                            color="secondary"
                            onClick={() => {history.push("/" + user.uid + "/newblog")}}
                        >
                            <Icon className="mr-3">note_add</Icon>
                            Escribir nueva entrada
                        </Button>
                </div>
                <Divider></Divider>
                <div className="py-2"></div>
                <Grid container>
                    <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
                    <Grid item lg={true} md={true} sm={true} xs={true}>
                        <h6 className="m-0">Contenido</h6>
                    </Grid>
                    <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="text-center"
                    >
                        <h6 className="m-0">Likes</h6>
                    </Grid>
                    <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="text-center"
                    >
                        <h6 className="m-0">Comentarios</h6>
                    </Grid>
                    <Grid
                        item
                        lg={2}
                        md={2}
                        sm={2}
                        xs={2}
                        className="text-center"
                    >
                        <h6 className="m-0">Editar</h6>
                    </Grid>
                </Grid>
            </div>
            <Divider></Divider>

            {   loading 
            ?   <Loading />
            :   <>
                {   blogs.id.length === 0 
                ?   <h3 align="center" className="m-5">No hay blogs a mostrar...</h3>
                :   <>{blogs.data.map((blog_entry, index) => (
                    <div key={blogs.id[index]} className="py-4 px-4">
                        <Grid container alignItems="center">
                            <Grid item lg={3} md={3} sm={3} xs={3}>
                                <div className="flex items-center">
                                    <div className="px-4">
                                        <img
                                            className="border-radius-4 w-full"
                                            height="200"
                                            width="200"
                                            src="/src/assets/images/blog/terapia2.jpg"
                                            alt={blog_entry.title}
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={true} md={true} sm={true} xs={true}>
                                <h6 className="m-0">{blog_entry.title}</h6>
                                {parse(blog_entry.content)}
                                <p id={`cont${index}`} className="mt-2 m-0 text-muted">
                                    
                                </p>
                            </Grid>
                            <Grid
                                item
                                lg={1}
                                md={1}
                                sm={1}
                                xs={1}
                                className="text-center"
                            >
                                <h6 className="m-0">{blog_entry.likes.length}</h6>
                            </Grid>
                            <Grid
                                item
                                lg={1}
                                md={1}
                                sm={1}
                                xs={1}
                                className="text-center"
                            >
                                <h6 className="m-0">{blog_entry.comments.length}</h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <Fab
                                    size="small"
                                    color="primary"
                                    aria-label="View"
                                    onClick={() => {
                                        history.push('/blog/' + blogs.id[index])
                                    }}
                                    className={classes.button}
                                >
                                    <Icon>play_circle_outline</Icon>
                                </Fab>
                                <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="Edit"
                                    onClick={() => {
                                        console.log("/" + user.uid + "/editblog?bid=" + blogs.id[index])
                                        history.push("/" + user.uid + "/editblog?bid=" + blogs.id[index])
                                    }}
                                    className={classes.button}
                                >
                                    <Icon>edit_icon</Icon>
                                </Fab>
                                <Fab
                                    size="small"
                                    color="error"
                                    aria-label="Delete"
                                    onClick={() => {
                                        api.delete("/b/" + blogs.id[index]).then(() => {
                                            window.location.reload()
                                        })
                                    }}
                                    className={clsx(classes.button, classes.delete)}
                                >
                                    <Icon>delete</Icon>
                                </Fab>
                            </Grid>
                        </Grid>
                    </div>
                ))}</> 
                }
                </>
            }
            <div>
                <Divider className="mb-12"></Divider>
            </div>
        </Card>
    )
}

export default TherapistBlogs

