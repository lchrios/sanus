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
                    <SidebarLink onClick={toggle}>
                        Acerca de
                    </SidebarLink>
                    <SidebarLink onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink onClick={toggle}>
                        Psicólogos
                    </SidebarLink>
                    <SidebarLink onClick={() => {toggle();  history.push('/session/signup')}}>
                        Comienza ya
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle}>Iniciar Sesión</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;