import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'
import advertiselogo from '../../images/advertiselogo.png'

export default function Header(props) {
  return (
    <div className='header-container1'>
      <div className='logo-container1'>
        <img src={advertiselogo} alt='logo' /> <h1>ON<span>sell</span></h1>
      </div>
        {/* <div className='header-input'> <input type='text' value='' placeholder='Search here in ONsell' /> </div> */}
        <div className='list-container1'>
       <Link className={props.page==='home'?'nav-link-selected1':'nav-link1'} to={'/to'}>Home</Link>
       <Link className={props.page==='explore'?'nav-link-selected1': 'nav-link1'} to={'/explore'}>Explore</Link>
       <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/footer'}>About</Link>   
        </div>

    </div>
  )
}
