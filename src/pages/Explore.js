import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopExplore from '../components/desktop/Explore.jsx'
import MobileExploreMobile from '../components/mobile/ExploreMobile.jsx'





function Explore() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopExplore/>}
    {isMobile && <MobileExploreMobile/>}
  
    </div>
  );
}

export default Explore;