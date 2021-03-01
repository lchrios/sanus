
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
                  <NavLogo to='/home'>Iknelia</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='/home' onClick={() => {history.push('/home')}}> Inicio </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/blogs' onClick={() => {toggle();history.push('/blogs')}}>Blog</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/psychologists' onClick={() => {toggle();history.push('/psychologists')}}>Psicólogos</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/session/signup' onClick={() => {toggle();history.push('/session/signup')}}>Comienza ahora</NavLinks>
                      </NavItem>
                      <NavBtn to='/session/signin'>
                          <NavBtnLink to='/session/signin' onClick={() => history.push('/session/signin')}>Iniciar Sesión</NavBtnLink>
                      </NavBtn>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;