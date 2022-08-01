import React, {useState, useRef, useEffect} from 'react'
import Header from '../desktop/Header'
import Cards from './Cards';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import {db} from '../../App.js'
import './styles/Home.css'
import explorebackground from '../../images/explorebackground.png'
import Explore from './Explore'
import HomeAuth from './HomeAuth';
import Footer from './Footer'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../features/authenticationSlice'
var validator = require("email-validator"); 



export default function Home() {
  const dispatch = useDispatch()
  const [hideModal, setHideModal] = useState(true)
  const [hideModal2, setHideModal2] = useState(true)



const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [userType, setUserType] = useState('Buyer')
const [error, setError] = useState('')
const [doingReg, setDoingReg] = useState(false)
const [signInError, setSignInError] = useState('')
const [signingIn, setSigningIn] = useState(false)


const [emailSignIn, setEmailSignIn] = useState('')
const [passwordSignIn, setPasswordSignIn] = useState('')


let navigate = useNavigate();

const firstNameRef = useRef()
const lasttNameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()



function firstNameHandler(e) {
 setFirstName(e.target.value) 
}

function lastNameHandler(e) {
 setLastName(e.target.value) 
}
function emailHandler(e) {
 setEmail(e.target.value) 
}
function passwordHandler(e) {
 setPassword(e.target.value) 
}

function emailSignInHandler(e) {
  setEmailSignIn(e.target.value) 
 }
 function passwordSignHandler(e) {
  setPasswordSignIn(e.target.value) 
 }
 




const SignUp=()=>{
  
 const isEmailValid = validator.validate(email)
 const passwordIsValid = password.length>=6 

 if(!isEmailValid){
  setError('Enter a valid email address')
  emailRef.current.focus()
  setTimeout(()=>{
setError('')
  },3500)
  return
 }


  if(!passwordIsValid){
  setError('Password must be 6 characters minimum')
  passwordRef.current.focus()
  setTimeout(()=>{
setError('')
  },3500)
  return
 }


 else{
registerUser(email, password)
 }

}

const SignIn=()=>{
  setSigningIn(true)
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)
    .then((userCredential) => {
   
      const user = userCredential.user;
      localStorage.setItem('userId', user.uid)
    dispatch(login({signIn: true}))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
setSigningIn(false)
      let message = ''
if(errorCode==='auth/invalid-email'){
  message = "Invalid Email address"
}

else if(errorCode==='auth/user-not-found'){
  message = "No user found"
}

else if(errorCode==='auth/network-request-failed'){
  message = "Check your internet connection"
}
else if(errorCode==='auth/wrong-password'){
  message = "Incorrect Password"
}
else if(errorCode==='auth/too-many-requests'){
  message = "Several Wrong Login Attempts (Try again in 5 mins)"
}
else{
 //console.log(errorMessage) 
}

//alert(errorCode)
setSignInError(message)
setTimeout(()=>{
setSignInError('')
},3500)
return
    });
  
}

const registerUser=async(user_email, user_password)=>{
  setDoingReg(true)
const auth = getAuth();
createUserWithEmailAndPassword(auth, user_email, user_password)
  .then(async(userCredential) => {
    
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
  firstName: firstName.trim(),
  lastName: lastName.trim(),
  email: email.trim(),
  userId: user.uid,
  userType: userType,
  dateRegistered: Timestamp.now()
}).then(()=>{
  setDoingReg(false)
setHideModal(true)
clearInputs()
dispatch(login({signIn: true})) 
localStorage.setItem('userId', user.uid)
})
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  setDoingReg(false)
let message = ''
if(errorMessage==='Firebase: Error (auth/email-already-in-use).'){
  message = "Email already exist"
}

else if('Firebase: Error (auth/network-request-failed).'){
  message = "Check your internet connection"
}

else{
 //console.log(errorMessage) 
}


  setError(message)
  setTimeout(()=>{
setError('')
  },3500)
  return
 

  });
}


function openSignIn(){
  
setHideModal(true)
setHideModal2(false)

}

function openSignUp(){
setHideModal(false)
setHideModal2(true)
}

function clearInputs(){
  setFirstName('')
  setLastName('')
  setEmail('')
  setPassword('')
}

const userTypeHandleChange = e => {

  setUserType(e.target.value)
 
   }

let disableButton = false
if(firstName==='' || lastName==='' || email==='' || password===''){
 disableButton = true 
}
else{
 disableButton = false 
}


let disableSignInButton = false
if(emailSignIn==='' || passwordSignIn===''){
  disableSignInButton = true 
}
else{
  disableSignInButton = false 
}



  return (
<>
{/* SignUp Component */}
  <div  className={hideModal?'signup-container-hidden':'signup-container'} >
    <div className='close-btn'>
      <svg onClick={()=>setHideModal(true)}  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
     </svg>
    </div>
      <span className='title'>SignUp Here</span>
       <div className='name-input'>
         <input onChange={firstNameHandler} value={firstName} type="text" placeholder='First Name' />
          <input onChange={lastNameHandler} value={lastName} type="text" placeholder='Last Name' />
       </div>
       <select 
          className="select-input" 
          name="userType" 
          value={userType}
         onChange={userTypeHandleChange}  
          id="userType">
    <option value="Buyer">Buyer</option>
    <option value="Seller">Seller</option>
  </select>
       
      <input ref={emailRef} onChange={emailHandler} value={email}  type="text" placeholder='Email Address' />
      <input ref={passwordRef} onChange={passwordHandler} value={password} type="password" placeholder='Enter Password' />
       <span hidden={error===""} className='errormesage'>{error}</span>
      
      <div className="checkbox">
         <input type="checkbox" name="submit" id=""/>
        <span className='checkbox-text'>With ONsell, your information is security.</span>
      </div>
      <button onClick={()=>SignUp()} disabled={disableButton || doingReg} className={disableButton ? 'signup-button-disabled' : 'signup-button' } type='submit'>{doingReg?'Please Wait..' : 'Submit'}</button>
      
        
      <a style={{textAlign: 'center', marginTop: 7}}>Already have account? <b onClick={()=>openSignIn()} style={{cursor: "pointer"}}>Sign-in</b></a>
    </div>



    {/* SignIn Component */}
  <div  className={hideModal2?'signin-container-hidden':'signin-container'} >
    <div className='close-btn'>
      <svg onClick={()=>setHideModal2(true)}  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
    </div>
      <span className='title2'>SignIn Here</span>
   
      <input  onChange={emailSignInHandler} value={emailSignIn}  type="text" placeholder='Email Address' />
      <input onChange={passwordSignHandler} value={passwordSignIn} type="password" placeholder='Enter Password' />
       <span hidden={signInError===""} className='errormesage'>{signInError}</span>
      
      <div className="checkbox">
         <input type="checkbox" name="submit" id=""/>
        <span className='checkbox-text'>With ONsell, your information is security.</span>
      </div>
      <button onClick={()=>SignIn()} disabled={disableSignInButton || signingIn} className={disableSignInButton ? 'signin-button-disabled' : 'signin-button' } type='submit'>{signingIn?'Please Wait..' : 'LogIn'}</button>
      
        
      <a>Don't have an account? <b onClick={()=>openSignUp()} style={{cursor: "pointer"}}>Sign-up</b></a>
    </div>

    <div className='home-container'>
     <Header page="home"/>

     <div className='home-content'>
       <span className='header-text'>Welcome !</span>
       <span className='sub-header-text'>Want to Buy or Sell a Property ?</span>
       <span className='sub-text'>We've got you covered.</span>
        <button onClick={()=>setHideModal(false)} className='home-button' > <span className='home-button-text' >Click To Get Started</span> </button>
     </div>
     <Cards/>
     <Footer/>
    </div>
  </>
 
  )
}
