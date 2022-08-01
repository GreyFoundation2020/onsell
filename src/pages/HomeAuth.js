import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopHomeAuth from '../components/desktop/HomeAuth'
import MobileHomeAuth from '../components/mobile/HomeAuth'





function HomeAuth() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopHomeAuth/>}
    {isMobile && <MobileHomeAuth/>}
  
    </div>
  );
}

export default HomeAuth;
