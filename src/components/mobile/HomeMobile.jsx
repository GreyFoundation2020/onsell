import React, {useState, useRef, useEffect} from 'react'
import Header from '../mobile/HeaderMobile'
import './styles/HomeMobile.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import {db} from '../../App.js'
import background from '../../images/background.png' 
import explorebackground from '../../images/explorebackground.png'
var validator = require("email-validator"); 



export default function Home() {
  const [hideModal, setHideModal] = useState(true)
  const [hideModal2, setHideModal2] = useState(true)


const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [doingReg, setDoingReg] = useState(false)

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
  dateRegistered: Timestamp.now()
}).then(()=>{
  setDoingReg(false)
setHideModal(true)
clearInputs()
navigate("/home", { replace: true });


 
})
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  setDoingReg(false)
  alert(errorMessage)
 

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

let disableButton = false
if(firstName==='' || lastName==='' || email==='' || password===''){
 disableButton = true 
}
else{
 disableButton = false 
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
      <input ref={emailRef} onChange={emailHandler} value={email}  type="text" placeholder='Email Address' />
      <input ref={passwordRef} onChange={passwordHandler} value={password} type="password" placeholder='Enter Password' />
       <span hidden={error===""} className='errormesage'>{error}</span>
      
      <div className="checkbox">
         <input type="checkbox" name="submit" id=""/>
        <span className='checkbox-text'>With ONsell, your information is security.</span>
      </div>
      <button onClick={()=>SignUp()} disabled={disableButton || doingReg} className={disableButton ? 'signup-button-disabled' : 'signup-button' } type='submit'>{doingReg?'Please Wait..' : 'Submit'}</button>
      
        
      <a>Already have account? <b onClick={()=>openSignIn()} style={{cursor: "pointer"}}>Sign-in</b></a>
    </div>



    {/* SignIn Component */}
  <div  className={hideModal2?'signin-container-hidden':'signin-container'} >
    <div className='close-btn'>
      <svg onClick={()=>setHideModal2(true)}  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
    </div>
      <span className='title2'>SignIn Here</span>
   
      <input ref={emailRef} onChange={emailHandler} value={email}  type="text" placeholder='Email Address' />
      <input ref={passwordRef} onChange={passwordHandler} value={password} type="password" placeholder='Enter Password' />
       <span hidden={error===""} className='errormesage'>{error}</span>
      
      <div className="checkbox">
         <input type="checkbox" name="submit" id=""/>
        <span className='checkbox-text'>With ONsell, your information is security.</span>
      </div>
      <button onClick={()=>SignUp()} disabled={disableButton || doingReg} className={disableButton ? 'signup-button-disabled' : 'signup-button' } type='submit'>{doingReg?'Please Wait..' : 'LogIn'}</button>
      
        
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
  
    </div>
  </>
 
  )
}

