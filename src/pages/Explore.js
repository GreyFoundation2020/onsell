import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopExplore from '../components/desktop/Explore.jsx'
import MobileExplore from '../components/mobile/Explore.jsx'





function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopExplore/>}
    {isMobile && <MobileExplore/>}
  
    </div>
  );
}

export default Home;