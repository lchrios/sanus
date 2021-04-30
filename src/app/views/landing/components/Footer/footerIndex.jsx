import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './footerElements'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre nosotros  </FooterLinkTitle>
                            <FooterLink to="/signin">Registrate</FooterLink>
                                <FooterLink to="/blogs">Conoce más</FooterLink>
                                <FooterLink to="/therapists">Especialistas</FooterLink>
                                <FooterLink to="/">Contacto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Uso de datos  </FooterLinkTitle>
                                <FooterLink to="/signin">Registrate</FooterLink>
                                <FooterLink to="/blogs">Conoce más</FooterLink>
                                <FooterLink to="/therapists">Especialistas</FooterLink>
                                <FooterLink to="/">Contacto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Trabaja con nosotros </FooterLinkTitle>
                                <FooterLink to="/signin">Registrate</FooterLink>
                                <FooterLink to="/blogs">Conoce más</FooterLink>
                                <FooterLink to="/therapists">Especialistas</FooterLink>
                                <FooterLink to="/">Contacto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contacto </FooterLinkTitle>
                                <FooterLink to="/signin">Registrate</FooterLink>
                                <FooterLink to="/blogs">Conoce más</FooterLink>
                                <FooterLink to="/therapists">Especialistas</FooterLink>
                                <FooterLink to="/">Contacto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Iknelia
                        </SocialLogo>
                        <WebsiteRights>
                            Derechos de autor {new Date().getFullYear() } todos los derechos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/ikneliacontigo/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/ikneliacontigo/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;