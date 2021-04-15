
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
import useAuth from 'app/hooks/useAuth';
import firebase from 'firebase/app'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav ] =  useState(false)
    const { assignUserRole, user, isAuthenticated } = useAuth()
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
                    <MobileIcon onClick={toggleHome && toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/home' onClick={() => {history.push('/home')}}> Inicio </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/blogs' onClick={() => {history.push('/blogs')}}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/psychologists' onClick={() => {history.push('/psychologists')}}>Psicólogos</NavLinks>
                        </NavItem>
                        { !isAuthenticated ? <NavItem>
                            <NavLinks to='/session/signup' onClick={() => {history.push('/session/signup')}}>Comienza ahora</NavLinks>
                        </NavItem> : null}
                        { user 
                        ?   <NavBtn to='/session/signin'>
                                <NavBtnLink to='/session/signin' onClick={() => {
                                    firebase.auth().currentUser.getIdTokenResult()
                                        .then( decodedToken => {
                                            switch (decodedToken.claims.role) {
                                                case "user":
                                                    history.push(`/${user.uid}/home`)
                                                    break;
                        
                                                case "therapist":
                                                    history.push(`/${user.uid}/dashboard`)
                                                    break;
                        
                                                case "admin":
                                                    history.push(`/${user.uid}/analytics`)
                                                    break;
                                        
                                                default:
                                                    console.error('No role was detected')
                                                    // TODO: if no role, set user role and redirect to home
                                                    assignUserRole(user.uid).then(() => {
                                                        history.push(`/${user.uid}/home`);
                                                        
                                                    });
                                                    break; 
                                                    
                                                    
                                            }
                                        })
                                        .catch( error => {
                                            console.error("Error al obtener el decodedToken del user", error)
                                        })
                                }}><p className="h4 mt-1 text-muted">{"¡Bienvenido/a " + user.name + "!"}</p></NavBtnLink>
                            </NavBtn>
                        :   <NavBtn to='/session/signin'>
                                <NavBtnLink to='/session/signin' onClick={() => history.push('/session/signin')}>Iniciar Sesión</NavBtnLink>
                            </NavBtn>
                        }
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;