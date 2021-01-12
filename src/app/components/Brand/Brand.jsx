import React from 'react'
import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    brand: {
        padding: '20px 18px 20px 24px',
    },
    hideOnCompact: {
        display: 'none',
    },
}))

export const IkneliaLogo = styled(LinkRouter)`
 color:white;

 justify-self: flex-start;
 cursor:pointer;
 font-family: 'Dancing Script', cursive;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 margin-left:24px;
 font-weight:bold;
 text-decoration:none;
 
`;

const Brand = ({ children }) => {
    const classes = useStyles()
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        
        <div
            className={clsx('flex items-center justify-between', classes.brand)}
        >
            <div className="flex items-center">
                <IkneliaLogo to="/">Iknelia</IkneliaLogo>
            </div>
            <div
                className={clsx({
                    sidenavHoverShow: true,
                    [classes.hideOnCompact]: mode === 'compact',
                })}
            >
                {children || null}
            </div>
        </div>
    )
}

export default Brand
