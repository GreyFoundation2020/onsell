import React from 'react'
import { Link } from 'react-router-dom'
import advertiselogo from '../../images/advertiselogo.png'
import './styles/HeaderMobile.css'



export default function HeaderMobile(props) {
  return (
    <div className='header-container2'>
      <div className='logo-container'>
        <img src={advertiselogo} alt='logo' /><h1>ON<span>sell</span></h1>
      </div>
        {/* <div className='header-input'> <input type='text' value='' placeholder='Search here in ONsell' /> </div> */}
        <div className='list-container2'>
       <Link className={props.page==='home'?'nav-link-selected':'nav-link2'} to={'/to'}>Home</Link>
       <Link className={props.page==='explore'?'nav-link-selected':'nav-link2'} to={'/explore'}>Explore</Link>
       {/* <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/pricing'}>Pricing</Link>
       <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/sell'}>Sell</Link> */}
       <Link className={props.page==='testimonies'?'nav-link-selected':'nav-link2'} to={'/about'}>About</Link>   
        </div>

    </div>
  )
}
