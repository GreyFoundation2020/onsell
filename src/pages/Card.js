import React from "react";
import { useMediaQuery } from 'react-responsive'
import DesktopCards from '../components/desktop/Cards.jsx'
import MobileCardsMobile from '../components/mobile/CardsMobile.jsx'





function Card() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopCards/>}
    {isMobile && <MobileCardsMobile/>}
  
    </div>
  );
}

export default Card;