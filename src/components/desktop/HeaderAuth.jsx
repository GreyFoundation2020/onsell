import React, {useState, useEffect} from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../features/authenticationSlice'
import {db} from '../../App.js'
import moment from "moment";
import './styles/HeaderAuth.css'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import advertiselogo from '../../images/advertiselogo.png'
import profileImage from '../../images/profileImage.png'

export default function HeaderAuth(props) {
const dispatch = useDispatch()
  const [userName, setUserName]=useState('')

useEffect(()=>{
  getUserDetails()
},[])

const logOut=()=>{
  localStorage.removeItem('userId')
  dispatch(logout({signIn: false}))
}

const getUserDetails=async()=>{
  let firstName = ''
  let lastName =  ''
  let userId = await localStorage.getItem('userId')
  const unsub = onSnapshot(doc(db, "users", userId), (doc) => {
if(doc.data()){
  firstName = doc.data().firstName!==undefined && doc.data().firstName
  lastName =  doc.data().lastName!==undefined &&  doc.data().lastName
let user_name = firstName + ' '+lastName
setUserName(user_name)
}

unsub()
  
});

}

  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={advertiselogo} alt='logo' /><h1>ON<span>sell</span></h1>
      </div>
           <div className='list-container-auth'>
       <Link className={props.page==='home'?'nav-link-selected':'nav-link'} to={'/to'}>Home</Link>
       <Link className={props.page==='explore'?'nav-link-selected':'nav-link'} to={'/explore'}>Explore</Link>
       <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/pricing'}>Market</Link>
       <Link className={props.page==='contact'?'nav-link-selected':'nav-link'} to={'/sell'}>Sell</Link>
       <Link className={props.page==='testimonies'?'nav-link-selected':'nav-link'} to={'/testimonies'}>Testimonies</Link>   
        </div>
        {userName!==''?
        <div className='user-info-container'>
        <div  className='user-info'>
          <div className='profile-container'>
              <img className='profileImage' src={profileImage} alt="image" />        
          </div>
            <span hidden={userName===''} className='user-name'>{userName.length > 18 ?userName.substring(0,18)+'...':userName}</span>
            <span onClick={()=>logOut()}><LogoutIcon className='logout-icon'/></span>      
        </div>
        </div>
        :
        <div style={{marginRight: 10}}><span onClick={()=>logOut()}><LogoutIcon className='logout-icon'/></span> </div>     
      }
    </div>
  )
}
