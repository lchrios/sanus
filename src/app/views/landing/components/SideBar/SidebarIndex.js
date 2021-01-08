import React from 'react'
import { SidebarWrapper, SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute,  SidebarContainer, Icon, CloseIcon } from './SidebarElements'

export const Sidebar = ( { is0pen, toggle }) => {
    return (
        <SidebarContainer is0pen={is0pen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>
                        Acerca de
                    </SidebarLink>
                    <SidebarLink to='blog_ent' onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to = '/especialistas'onClick={toggle}>
                        Psicólogos
                    </SidebarLink>
                    <SidebarLink to = 'Registrarse'onClick={toggle}>
                        Comienza ya
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login" onClick={toggle}>Iniciar Sesión</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;