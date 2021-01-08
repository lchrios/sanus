import React, {useState} from 'react';
import Navbar  from "./components/Navbar_sc/NavbarIndex"
import Sidebar from './components/SideBar/SidebarIndex';
import {BrowserRouter as Router } from 'react-router-dom'
import HeroSection from "./components/HeroSection/HeroIndex"
import InfoSection from "./components/InfoSection/InfoIndex"
import BlogEntries from "./components/BlogEntries/entriesIndex"
import {homeObjOne,homeObjTwo,homeObjThree, blog1, blog2,blog3 } from './components/InfoSection/Data'
import Footer from './components/Footer/footerIndex'
import Form from './components/ContactForm/Form';

const Home = () => {
  const [is0pen, setIs0pen ] = useState(false)

  const toggle = () => {
    setIs0pen(!is0pen)
  };

  return (
    <Router>
      <Sidebar is0pen={is0pen} toggle={toggle}/>
      <Navbar toggle = {toggle}/>
      <HeroSection />
      <InfoSection id='inicio'{...homeObjOne}/>
      <BlogEntries id='blog_ent' {...blog1}/>
      <InfoSection id='prof'{...homeObjTwo}/>
      <Form />
      <InfoSection id='start'{...homeObjThree}/>
      <Footer />
      
      
      
    </Router>
  );
}

export default Home;