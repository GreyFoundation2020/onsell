import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopHomeAuth from '../components/desktop/HomeAuth'
import MobileHomeAuthMobile from '../components/mobile/HomeAuthMobile'


function HomeAuth() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopHomeAuth/>}
    {isMobile && <MobileHomeAuthMobile/>}
  
    </div>
  );
}

export default HomeAuth;
