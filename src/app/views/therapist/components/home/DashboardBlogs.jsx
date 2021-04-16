import {
    Card,
    Divider,
    Fab,
    Icon,
    IconButton,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import React from 'react';

const usestyles = makeStyles(({ palette, ...theme }) => ({
    profileContent: {
        marginTop: -345,
        paddingTop: 74,
        paddingRight: 30,
        paddingLeft: 4,
        '& .menu-button': {
            display: 'none',
        },

        '@media only screen and (max-width: 959px)': {
            marginTop: -390,
            paddingTop: 24,
            paddingRight: 16,
            paddingLeft: 16,
        },

        '@media only screen and (max-width: 767px)': {
            marginTop: -410,
            paddingTop: 16,
            paddingRight: 16,
            paddingLeft: 16,
            '& .menu-button': {
                display: 'flex',
            },
        },
    },

    cardLeftVerticalLine: {
        '&:after': {
            content: '" "',
            position: 'absolute',
            height: 35,
            width: 5,
            top: -30,
            background: palette.primary.main,
        },
    },

    cardGrayBox: {
        height: 220,
        width: 'calc(100% - 16px)',
        borderRadius: 8,
        backgroundColor: 'rgba(var(--body), 0.1)',
    },

    showAllPatients: {
        margin: theme.spacing(1),
      },
    
}))

const DashboardBlogs = () => {
    const classes = usestyles();
    return (
        <div>

        <Card className="overflow-unset flex py-4">
            <div className="w-100 min-w-100 text-center">
                <Fab
                    className="relative mt--14"
                    size="medium"
                    color="primary"
                    >
                    <Icon>trending_up</Icon>
                </Fab>
                <div className="py-3"></div>
                <IconButton size="small">
                    <Icon>favorite</Icon>
                </IconButton>
                <p className="pb-4 m-0">65</p>

                <IconButton size="small">
                    <Icon>chat</Icon>
                </IconButton>
                <p className="m-0">65</p>
            </div>
            <div className="flex-grow">
                <div className="flex items-center justify-between pr-4 pb-3">
                    <h5 className="m-0 font-medium capitalize">
                        Entrada más popular
                    </h5>
                    <span className="text-muted">
                        12/03/2019
                    </span>
                </div>
                <Divider className="mb-4"></Divider>
                <h4 className="m-0 font-medium capitalize">Técnicas de relajación</h4>
                <div className={classes.cardGrayBox}>
                    <img
                        className="h-full w-full border-radius-4"
                        src="/assets/images/photo-1.jpg"
                        alt="random"
                        />
                </div>
                <p className="m-0 pt-3">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                    text ever since the 1500s
                </p>
            </div>
        </Card>
        <div className="py-7"></div>
        <Card className="overflow-unset flex py-4">
            <div className="w-100 min-w-100 text-center">
                <Fab
                    className={clsx(
                        'relative mt--14',
                        classes.cardLeftVerticalLine
                        )}
                        size="medium"
                        color="primary"
                        >
                    <Icon>date_range</Icon>
                </Fab>
                <div className="py-3"></div>
                <IconButton size="small">
                    <Icon>favorite</Icon>
                </IconButton>
                <p className="pb-4 m-0">65</p>

                <IconButton size="small">
                    <Icon>chat</Icon>
                </IconButton>
                <p className="m-0">65</p>
            </div>
            <div className="flex-grow">
                <div className="flex items-center justify-between pr-4 pb-3">
                    <h5 className="m-0 font-medium capitalize">
                        Última entrada 
                    </h5>
                    <span className="text-muted">
                        12/03/2019
                    </span>
                </div>
                <Divider></Divider>
                <p className="m-0 pt-3">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                    text ever since the 1500s
                </p>
            </div>
        </Card>
        <div className="py-7"></div>
        <Card className="overflow-unset flex py-4">
            <div className="w-100 min-w-100 text-center">
                <Fab
                    className={clsx(
                        'relative mt--14',
                        classes.cardLeftVerticalLine
                        )}
                        size="medium"
                        color="primary"
                        >
                    <Icon>star_outline</Icon>
                </Fab>
                <div className="py-3"></div>
                <IconButton size="small">
                    <Icon>favorite</Icon>
                </IconButton>
                <p className="pb-4 m-0">65</p>

                <IconButton size="small">
                    <Icon>chat</Icon>
                </IconButton>
                <p className="m-0">65</p>
            </div>
            <div className="flex-grow">
                <div className="flex items-center justify-between pr-4 pb-3">
                    <h5 className="m-0 font-medium capitalize">
                        Entrada con mas likes
                    </h5>
                    <span className="text-muted">
                        12/03/2019
                    </span>
                </div>
                <Divider></Divider>
                <p className="m-0 pt-3">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                    text ever since the 1500s
                </p>
            </div>
        </Card>
    </div>
    )
}

export default DashboardBlogs