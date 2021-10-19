import React, { useEffect, useState } from 'react'
import { Icon, IconButton, Hidden, MenuItem, Avatar } from '@material-ui/core'
import { MatxMenu, MatxToolbarMenu} from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'
import useAuth from 'app/hooks/useAuth'
import history from '../../../../history'
import { NavLogo } from 'app/views/landing/components/Navbar_sc/NavbarElements'
import api from 'app/services/api'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        backgroundColor: palette.primary.main,
        borderColor: palette.divider,
        display: "table",
        height: 'var(--topbar-height)',
        borderBottom: '1px solid transparent',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        zIndex: 98,
        paddingLeft: '1.75rem',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1rem',
        },
    },
    brandText: {
        color: palette.primary.contrastText,
    },
    menuItem: {
        minWidth: 185,
        display: 'flex',
        alignItems: 'center',
    },
}))

const Layout2Topbar = () => {
    const classes = useStyles()
    const { settings, updateSettings } = useSettings()
    const { logout, user } = useAuth()

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout2Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleLogout = () => {
        logout().then(() => {
            history.push(`/home`)
        })
    }

    const handleSidebarToggle = () => {
        let { layout2Settings } = settings

        let mode =
            layout2Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close'

        updateSidebarMode({ mode })
    }

    const [url, setUrl] = useState();

    useEffect(() => {
        if (user.role === "therapist") {
            api.get(`/t/${user.uid}/image`)
            .then(res => {
                setUrl(res.data.url);
            })
        } else {
            api.get(`/u/${user.uid}/image`)
            .then(res => {
                setUrl(res.data.url);
            }) 
        }
    }, [user])

    return (
        <div className={clsx('relative w-full', classes.root)}>
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center h-full">
                    <NavLogo to="/home">Sanus</NavLogo>
                </div>
                <div className="mx-auto"></div>
                <div className="flex items-center">
                    <MatxToolbarMenu offsetTop="64px">
                        <span className="pl-1"><h3 className={classes.brandText}>{user.name}</h3></span> 
                        {/* // TODO ESQ: hacer esto bonito */}
                        <MatxMenu
                            menuButton={
                                <Avatar
                                    className="cursor-pointer mx-2"
                                    src={url}
                                />
                            }
                        >
                            <MenuItem className={classes.menuItem}>
                                <Icon> home </Icon>
                                <span className="pl-4"> Home </span>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    className={classes.menuItem}
                                    to={`/${user.uid}/home`}
                                >
                                    <Icon> person </Icon>
                                    <span className="pl-4"> Profile </span>
                                </Link>
                            </MenuItem>
                            <MenuItem className={classes.menuItem}>
                                <Icon> settings </Icon>
                                <span className="pl-4"> Settings </span>
                            </MenuItem>
                            <MenuItem
                                onClick={handleLogout}
                                className={classes.menuItem}
                            >
                                <Icon> power_settings_new </Icon>
                                <span className="pl-4"> Logout </span>
                            </MenuItem>
                        </MatxMenu>
                    </MatxToolbarMenu>

                    <Hidden mdUp>
                        <IconButton
                            className="text-white"
                            onClick={handleSidebarToggle}
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>
                </div>
            </div>
        </div>
    )
}

export default Layout2Topbar
