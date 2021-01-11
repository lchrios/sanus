import React from 'react'
import { Card } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
    addProductToCart,
    updateCartAmount,
} from 'app/redux/actions/EcommerceActions'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { AddToCartButton } from 'app/components'
import useAuth from 'app/hooks/useAuth'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productCard: {
        '& .product-price': {
            position: 'absolute',
            right: 0,
            top: 24,
            borderTopLeftRadius: 26,
            borderBottomLeftRadius: 26,
            zIndex: 4,
        },
        '& .image-box-overlay': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.74)',
            zIndex: 2,
            opacity: 0,
            transition: 'all 250ms ease-in-out',
        },
        '&:hover': {
            '& .image-box-overlay': {
                opacity: 1,
            },
        },
    },
}))

const BlogEntryItem = ({ blog }) => {
    const classes = useStyles()
    const { user } = useAuth()
    const { cartList } = useSelector((state) => state.ecommerce)
    const dispatch = useDispatch()

    const amount = cartList?.find((p) => p.id === product.id)?.amount || 0

    const handleUpdateCart = (productAmount) => {
        dispatch(updateCartAmount(user.id, product.id, productAmount))
    }

    const handleAddProduct = () => {
        dispatch(addProductToCart(user.id, product.id))
    }

    return (
        <div key={product.id} className="py-4 px-4">
            <Grid container alignItems="center">
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <div className="flex items-center">
                        <IconButton
                            size="small"
                            onClick={() =>
                                handleDeleteFromCart(product.id)
                            }
                        >
                            <Icon fontSize="small">clear</Icon>
                        </IconButton>
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
                    <h6 className="m-0">{product.title}</h6>
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
                    <h6 className="m-0">${product.price}</h6>
                </Grid>
                <Grid
                    item
                    lg={true}
                    md={true}
                    sm={true}
                    xs={true}
                    className="text-center"
                >
                    <TextField
                        variant="outlined"
                        name="amount"
                        type="number"
                        size="small"
                        value={product.amount}
                        onChange={(e) => handleChange(e, product.id)}
                        inputProps={{
                            style: {
                                // padding: "10px",
                                width: '60px',
                            },
                        }}
                    ></TextField>
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
                        ${product.price * product.amount}
                    </h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogEntryItem
