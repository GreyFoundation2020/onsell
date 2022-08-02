import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopHome from '../components/desktop/Home.jsx'
import MobileHomeMobile from '../components/mobile/HomeMobile.jsx'





function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopHome/>}
    {isMobile && <MobileHomeMobile/>}
  
    </div>
  );
}

export default Home;
