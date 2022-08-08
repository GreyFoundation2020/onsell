import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopHeaderAuth from '../components/desktop/HeaderAuth'
import MobileHeaderAuthMobile from '../components/mobile/HeaderAuthMobile'





function HeaderAuthMobbile() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopHeaderAuth/>}
    {isMobile && <MobileHeaderAuthMobile/>}
  
    </div>
  );
}

export default HeaderAuthMobbile;
