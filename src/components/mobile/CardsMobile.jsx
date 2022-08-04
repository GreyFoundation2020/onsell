import React from 'react'
import './styles/CardsMobile.css'

export default function CardsMobile() {
  return (
    <>
    <div className="cards-text"><h1>How To Get Started!.</h1></div>
    <div className='cards-container'>
        <div className='card-content'>
            <h1 className='card-h1'> Step 1</h1>
            <span>SignUp Option 🌫</span>
           <p>In order to make use of ONsell platform with it founctionalities,you have to create an account with us.</p>
           <button className='cards-button'>Learn More</button>  
        </div>
         <div className='card-content2'>
            <h1 className='card-h1'> Step 2</h1>
            <span>Setting Up Option ⚙  </span>
           <p>If you are done signing up with ONsell,then you have get your profile setup using the setting section on the dashboard.</p>
             <button className='cards-button'>Learn More</button> 
        </div>
         <div className='card-content3'>
            <h1 className='card-h1'> Step 3</h1>
            <span>Free To Go 🏍</span>
           <p>Finally, after get done with the two options, then you are free to post your products,get it sell and always buy from others..</p>
            <button className='cards-button'>Learn More</button> 
            </div>
      
    </div>
    </>
  )
}