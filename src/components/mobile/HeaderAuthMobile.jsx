import React from 'react'
import './styles/HeaderAuthMobile.css'
import { Link } from 'react-router-dom'
import advertiselogo from '../../images/advertiselogo.png'
import profileImage from '../../images/profileImage.png'

export default function HeaderAuthMobile(props) {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={advertiselogo} alt='logo' />
      </div>
      
        <div className='header-input'> <input type='text' value='' placeholder='Search here in ONsell' /> </div>
           <div className='list-container-auth'>

       <Link className={props.page==='home'?'nav-link-selected':'nav-link'} to={'/to'}>Home</Link>
       <Link className={props.page==='explore'?'nav-link-selected':'nav-link'} to={'/explore'}>Explore</Link>
       <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/pricing'}>Market</Link>
       <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/sell'}>Sell</Link>
       <Link className={props.page==='testimonies'?'nav-link-selected':'nav-link'} to={'/testimonies'}>Testimonies</Link>   
        </div>
        <div className='user-info'>
          <div className='profile-container'>
              <img className='profileImage' src={profileImage} alt="image" />
            
          </div>
            <span className='user-name'>Greg</span>
        </div>

    </div>
  )
}

