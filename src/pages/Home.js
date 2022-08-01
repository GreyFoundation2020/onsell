import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopHome from '../components/desktop/Home.jsx'
import MobileHome from '../components/mobile/Home.jsx'





function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopHome/>}
    {isMobile && <MobileHome/>}
  
    </div>
  );
}

export default Home;
