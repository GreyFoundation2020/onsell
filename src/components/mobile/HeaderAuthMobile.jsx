import React from 'react'
import './styles/HeaderAuthMobile.css'
import { Link } from 'react-router-dom'
import advertiselogo from '../../images/advertiselogo.png'
import profileImage from '../../images/profileImage.png'

export default function HeaderAuthMobile(props) {
  return (
    <div className='header-container5'>
      <div className='logo-container5'>
        <img src={advertiselogo} alt='logo' />
      </div>
      
        <div className='header-input'> <input type='text' value='' placeholder='Search here' /> </div>
           <div className='list-container-auth5'>
{/* 
       <Link className={props.page==='home'?'nav-link-selected':'nav-link'} to={'/to'}>Home</Link> */}
       {/* <Link className={props.page==='explore'?'nav-link-selected':'nav-link'} to={'/explore'}>Explore</Link> */}
       <Link className={props.page==='contact'?'nav-link-selected5':'nav-link5'} to={'/pricing'}>Market</Link>
       <Link className={props.page==='contact'?'nav-link-selected5':'nav-link5'} to={'/sell'}>Sell</Link>
       {/* <Link className={props.page==='testimonies'?'nav-link-selected':'nav-link'} to={'/testimonies'}>Testimonies</Link>    */}
        </div>
        <div className='user-info5'>
          <div className='profile-container5'>
              <img className='profileImage' src={profileImage} alt="image" />
            
          </div>
            <span className='user-name5'>Greg</span>
        </div>

    </div>
  )
}

