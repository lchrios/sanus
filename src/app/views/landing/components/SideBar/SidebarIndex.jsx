import React from 'react'
import { SidebarWrapper, SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute,  SidebarContainer, Icon, CloseIcon } from './SidebarElements'
import history from '../../../../../history'
export const Sidebar = ( { is0pen, toggle }) => {
    return (
        <SidebarContainer is0pen={is0pen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={() => {toggle();history.push('/home')}} to='/home'>
                        Inicio
                    </SidebarLink>
                    <SidebarLink onClick={() => {toggle();history.push('/blogs')}} to='/blogs'>
                        Blog
                    </SidebarLink>
                    <SidebarLink onClick={() => {toggle();history.push('/therapists')}} to='/psychologists'>
                        Psicólogos
                    </SidebarLink>
                    <SidebarLink onClick={() => {history.push('/session/signup')}} to='/session/signup'>
                        Comienza ya
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={() => {history.push('/session/signin')}} to='/session/signin'>Iniciar Sesión</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;