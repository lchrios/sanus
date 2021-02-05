import React, { useState } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import {
    deleteProductFromCart,
    updateCartAmount,
} from 'app/redux/actions/EcommerceActions'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import axios from 'axios'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cart: {
        minWidth: 900,
        overflowX: 'scroll',
    },
    button: {
        margin: theme.spacing(1),
    },
}))

const titles_data = [
    {t: "Peligros del abuso de la PC"},
    {t: "La decoracion: un reflejo de nuestra mente"},
    {t: "El metro y la música: efecto sobre las personas"},
    {t: "Sonoroterapia: terapia con sonidos calmantes"}
];

const TherapistBlogs = () => {
    const [blogs_data, setBlogs] = useState()
    const [titles, setTitles] = useState(titles_data)

    const { user } = useAuth()
    const history = useHistory()
    const classes = useStyles()

    useEffect(() => {
        axios.get()
    }, [blogs_data])

    return (
        <Card elevation={3} className={clsx('m-sm-30', classes.cart)}>
            <div className="py-4 px-4">
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
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <h6 className="m-0">Contenido</h6>
                    </Grid>
                    <Grid
                        item
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                        className="text-center"
                    >
                        <h6 className="m-0">Likes</h6>
                    </Grid>
                    <Grid
                        item
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                        className="text-center"
                    >
                        <h6 className="m-0">Comentarios</h6>
                    </Grid>
                    <Grid
                        item
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                        className="text-center"
                    >
                        <h6 className="m-0">Editar</h6>
                    </Grid>
                </Grid>
            </div>
            <Divider></Divider>

            {blogs_data.map((blog_entry) => (
                <div key={blog_entry.id} className="py-4 px-4">
                    <Grid container alignItems="center">
                        <Grid item lg={3} md={3} sm={3} xs={3}>
                            <div className="flex items-center">
                                <IconButton
                                    size="small"
                                    onClick={() =>
                                        handleDeleteFromCart(blog_entry.id)
                                    }
                                >
                                    <Icon fontSize="small">clear</Icon>
                                </IconButton>
                                <div className="px-4">
                                    <img
                                        className="border-radius-4 w-full"
                                        src={blog_entry.imgUrl}
                                        alt={blog_entry.title}
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <h6 className="m-0">{blog_entry.title}</h6>
                            <p className="mt-2 m-0 text-muted">
                                {blog_entry.description}
                            </p>
                        </Grid>
                        <Grid
                            item
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                            className="text-center"
                        >
                            <h6 className="m-0">{blog_entry.likes}</h6>
                        </Grid>
                        <Grid
                            item
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                            className="text-center"
                        >
                            <h6 className="m-0">{blog_entry.comments.length}</h6>
                        </Grid>
                        <Grid
                            item
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                            className="text-center"
                        >
                            <Fab
                                color="secondary"
                                aria-label="Edit"
                                className={classes.button}
                            >
                                <Icon>edit_icon</Icon>
                            </Fab>
                        </Grid>
                    </Grid>
                </div>
            ))}
            <div>
                <Divider className="mb-12"></Divider>
            </div>
        </Card>
    )
}

export default TherapistBlogs

