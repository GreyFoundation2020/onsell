import React from "react";
import { useMediaQuery } from 'react-responsive'
import Footer from "../components/desktop/Footer";
import DesktopFooter from '../components/desktop/Footer'
import MobileFooterMobile from '../components/mobile/FooterMobile.jsx'





function Footer() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopFooter/>}
    {isMobile && <MobileFooterMobile/>}
  
    </div>
  );
}

export default Footer;