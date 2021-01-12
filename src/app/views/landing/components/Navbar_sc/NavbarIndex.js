
import React, {useState, useEffect} from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink  } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll'
import history from '../../../../../history'
import { Redirect } from 'react-router-dom';

const Navbar = ( {toggle} ) => {
    const [scrollNav, setScrollNav ] =  useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <>
          <Nav scrollNav = {scrollNav}>
              <NavbarContainer>
                  <NavLogo onClick={toggleHome}>Iknelia</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks >Acerca de</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks >Blog</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks >Psicólogos</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks onClick={() => {history.push("/session/signup")}}>Comienza ahora</NavLinks>
                      </NavItem>
                      <NavBtn onClick={() => {history.push("/session/signin")} }>
                          <NavBtnLink to='session/signin'>Iniciar Sesión</NavBtnLink>
                      </NavBtn>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;