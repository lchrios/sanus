import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Avatar } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        height: '40px',
        width: '40px',
    },
}))

const PaymentMenu = ({ paymentOptions }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)    
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    function handleClickListItem(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleMenuItemClick(event, index) {
        setSelectedIndex(index)
        setAnchorEl(null)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Device settings">
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="When device is locked"
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary="When device is locked"
                        secondary={paymentOptions[selectedIndex].label}
                    />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {paymentOptions.map((option, index) => (
                    <MenuItem
                        key={index}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {/*<Avatar
                            className={classes.avatar}
                            src={option.src}
                        />*/} {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default PaymentMenu
