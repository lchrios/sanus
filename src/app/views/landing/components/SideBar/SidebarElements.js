import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-router-dom'

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#6C63FF;
display:grid;
align-items:center;
top:0;
left:0;
transition:.3s ease-in-out;
opacity: ${( {is0pen} ) => (is0pen ? '100%' : '0' ) };
top: ${ ( {is0pen} ) => (is0pen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
 color:#fff;

`;

export const Icon = styled.div`
 position:absolute;
 top: 1.2rem;
 right: 1.5rem;
 background:transparent;
 cursor:pointer;
 outline:none;
`

export const SidebarWrapper = styled.div`
 color:white;
`;

export const SidebarMenu = styled.ul`
 display:grid;
 grid-template-columns:1fr;
 grid-template-rows: repeat(6, 80px);
 text-align:center;
    @media screen and ( max-width: 960px ) {
    grid-template-rows: repeat(6,60px);
};
`;

export const SidebarLink = styled(LinkScroll)`
color: black;
display:flex;
align-items:center;
color: white;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition: 0.2s ease-in-out;
cursor: pointer;

 &:hover {
     color:#01bf71;
     transition:0.2 ease-in-out;
 };
`;

export const SideBtnWrap = styled.div`
 display:flex;
 justify-content:center;
`;

export const SidebarRoute = styled(LinkRouter)`
 border-radius:50px;
 background: #01bf71;
 white-space:nowrap;
 padding:16px 64px;
 color:#010606;
 font-size: 16px;
 outline:none;
 border:none;
 cursor:pointer;
 transition:all 0.2 ease-in-out;
 text-decoration:none;

 &:hover {
     transition:all 0.2s ease-in-out;
     background: #fff;
     color:#010606;

 }
`


