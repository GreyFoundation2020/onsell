import React from "react";
import { useMediaQuery } from 'react-responsive'
import Cards from "../components/desktop/Cards";
import DesktopHome from '../components/desktop/Cards'
import MobileHome from '../components/mobile/Cards'





function Card() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
    {isDesktop && <DesktopCards/>}
    {isMobile && <MobileCards/>}
  
    </div>
  );
}

export default Card;