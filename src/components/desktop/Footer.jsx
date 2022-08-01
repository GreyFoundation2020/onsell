import React from 'react'
import './styles/Footer.css'


export default function Footer() {
  return (
    <>
    
  
    <div className='footer-container'>
     <div className='footer-h1'> <h1></h1></div>
     <div className="footer">
      <hr/>
      <div className="footer-left">
        <h1>ON<span>sell</span></h1>
        <div className="footer-about">
          <h3>About ONsell</h3>
          <p>we are daily driven to keep our promise of afforable
            housing products and other Properties with a singular mission to 
            exceed expectation
          </p>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-center-text">
          <p>
            For Complaints and enquiries you can reach us 
            on any of the number or visit our whatsApp.
          </p>
          <p>
            🔗 Calabar, Cross River State. Nigeria.
          </p>
          <p>📱 Call us +2341234566788 +2341234566788  +2341234566788</p>
          <p>
            💌
            clientservice@ONsell.gmail.com
          </p>
          <h4>Contact us</h4>
        </div>
      </div>
      <div className="footer-right">
        <h3>Newsletter</h3>
        <div className="footer-search">
          <input type="text" value={''}
          placeholder='Enter your email' />
          <button className='footer-button'>Submit</button>
        </div>
        <p>Leave your email with us for information on our latest products and promo</p>

      </div>
     </div>
     <div className="footer-bottom">
      <p>© NOsell -- All right reserved</p>
        <div className="footer-social">
          Facebook Twitter Instagram IinkedIn.
        </div>
     </div>
 
     </div>
       </>
  )
}