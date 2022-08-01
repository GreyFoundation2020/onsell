import React from "react";
import { useMediaQuery } from 'react-responsive'
import Footer from "../components/desktop/Footer";
import DesktopHome from '../components/desktop/Footer'
import MobileHome from '../components/mobile/Footer'





function Footer() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopFooter/>}
    {isMobile && <MobileFooter/>}
  
    </div>
  );
}

export default Footer;