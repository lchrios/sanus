import React, {useState} from 'react';
import Navbar  from "./components/Navbar_sc/NavbarIndex"
import Sidebar from './components/SideBar/SidebarIndex';
import {BrowserRouter as Router } from 'react-router-dom'
import HeroSection from "./components/HeroSection/HeroIndex"
import InfoSection from "./components/InfoSection/InfoIndex"
import BlogEntries from "./components/BlogEntries/entriesIndex"
import {homeObjOne,homeObjTwo, blogs } from './components/InfoSection/Data'
import Footer from './components/Footer/footerIndex'
import PsySection from './components/psychologists/psychologists'
import useAuth from 'app/hooks/useAuth';


const Home = () => {
  const [is0pen, setIs0pen] = useState(false)
  const { user } = useAuth();

  const toggle = () => {
    setIs0pen(!is0pen)
  };

  return (
    <Router>
      <Sidebar is0pen={is0pen} toggle={toggle}/>
      <Navbar toggle = {toggle} user={user} />
      <HeroSection />
      <InfoSection id='inicio'{...homeObjOne}/>
      <PsySection />
      <InfoSection id='prof'{...homeObjTwo}/>
      <BlogEntries id='blog_ent' {...blogs}/>
      <Footer />
    </Router>
  );
}

export default Home;