import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopExplore from '../components/desktop/Explore'






function Explore() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopExplore/>}
    {isMobile && <h2>Mobile Explore</h2>}
  
    </div>
  );
}

export default Explore;
