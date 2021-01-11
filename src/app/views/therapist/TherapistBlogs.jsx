import React, {    useState} from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    IconButton,
    Icon,
    Button,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
    deleteProductFromCart,
    updateCartAmount,
} from 'app/redux/actions/EcommerceActions'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cart: {
        minWidth: 900,
        overflowX: 'scroll',
    },
}))

const titles_data = [
    {t: "Peligros del abuso de la PC"},
    {t: "La decoracion: un reflejo de nuestra mente"},
    {t: "El metro y la música: efecto sobre las personas"},
    {t: "Sonoroterapia: terapia con sonidos calmantes"}
];

const TherapistBlogs = () => {
    const { cartList = [] } = useSelector((state) => state.ecommerce)
    const user = useSelector((state) => state.user)

    const [titles, setTitles] = useState(titles_data)

    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const getTotalCost = () => {
        let totalCost = 0
        cartList.forEach((product) => {
            totalCost += product.amount * product.price
        })
        return totalCost
    }

    const handleChange = (event, productId) => {
        let amount = event.target.value
        dispatch(updateCartAmount(user.userId, productId, Math.abs(amount)))
    }

    const handleDeleteFromCart = (productId) => {
        dispatch(deleteProductFromCart(user.userId, productId))
    }

    return (
        <Card elevation={3} className={clsx('m-sm-30', classes.cart)}>
            <div className="py-4 px-4">
                <div className="flex items-center mb-4 px-4">
                        <TextField
                            variant="outlined"
                            placeholder="Discount Coupon"
                            className="flex-grow"
                            size="small"
                        ></TextField>
                        <Button
                            className="mx-3"
                            variant="contained"
                            color="secondary"
                        >
                            Apply
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => history.push('/ecommerce/checkout')}
                        >
                            Checkout
                        </Button>
                </div>
                <Divider></Divider>
                <div className="py-2"></div>
                <Grid container>
                    <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <h6 className="m-0">Descripción</h6>
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
                        <h6 className="m-0">Personas alcanzadas</h6>
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

            {cartList.map((product) => (
                <div key={product.id} className="py-4 px-4">
                    <Grid container alignItems="center">
                        <Grid item lg={3} md={3} sm={3} xs={3}>
                            <div className="flex items-center">
                                <div className="px-4">
                                    <img
                                        className="border-radius-4 w-full"
                                        src={product.imgUrl}
                                        alt={product.title}
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <h6 className="m-0">{product.name}</h6>
                            <p className="mt-2 m-0 text-muted">
                                {product.description}
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
                            <h6 className="m-0">{product.price}</h6>
                        </Grid>
                        <Grid
                            item
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                            className="text-center"
                        >
                            <h6 className="m-0">
                                {product.price * product.amount}
                            </h6>
                        </Grid>
                        <Grid
                            item
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                            className="text-center"
                        >
                            <IconButton>
                                <Icon>edit</Icon>
                            </IconButton>
                        </Grid>
                        
                    </Grid>
                </div>
            ))}

            <div>
                <Divider className="mb-12"></Divider>
                <Grid container className="mb-12 px-4">
                    <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
                    <Grid item lg={true} md={true} sm={true} xs={true}></Grid>
                    <Grid
                        item
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                        className="text-center"
                    >
                        <h6 className="m-0">Total</h6>
                    </Grid>
                    <Grid
                        item
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                        className="text-center"
                    >
                        <h6 className="m-0">${getTotalCost().toFixed(2)}</h6>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}

export default TherapistBlogs
