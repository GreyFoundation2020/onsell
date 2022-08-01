import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopHeader from '../components/desktop/Header.jsx'
import MobileHeader from '../components/mobile/Header.jsx'

export const Header = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' })
   const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <div>
          {isDesktop && <DesktopHeader/>}
          {isMobile && <MobileHeader/>}
    </div>
  )
}
