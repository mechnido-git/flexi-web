import React from 'react'
import "../footer/Footer.css";
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
export default function Footer() {
  return (
    <>
     <div className='footer'>
      <div className='footer-left'>

        <div className='left-cont'>
        <h2 className='aut'>AUTONO</h2>

        <div className='data-grid'>
        <span>Technology</span>
        <span>Tel: 123-456-7890</span>
        </div>
        <div className='data-grid'>
        <span>About</span>
        <span>Email: info@mysite.com</span>
        </div>
        <div className='data-grid'>
        <span>Career</span>
        <span>500 Terry Francois St San Francisco, CA 94158</span>
        </div>
        <div className='copy-right'>
        <span>© 2035 by Autono. Powered and secured by Wix</span>
        </div>

       
        </div>

        
      </div>
      <div className='footer-right'>
        <div className='right-cont'>
        <div className='data'>
        <span className='subs'>SUBSCRIBE</span>
            <span className='mess'>Sign up to receive Autono news and updates.</span>
            <label className='mess'>Email *</label>
            <div className='input'><input  type='email'/>
            <button className='btn'>Subscribe</button>
            </div>
           
        </div>
        
        
        </div>
        <div className='icons'>
        
        <img alt="LinkedIn" style={{width: "24px", height: "24px", objectFit: "cover"}} fetchpriority="high" src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"/>
        
        <img alt="Facebook" style={{width: "24px", height: "24px", objectFit: "cover"}}  fetchpriority="high" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"/>

        
        <img alt="Twitter"  style={{width: "24px", height: "24px", objectFit: "cover"}}  fetchpriority="high" src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"/>
        
        <img alt="Instagram"  style={{width: "24px", height: "24px", objectFit: "cover"}}  fetchpriority="high" src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"/>
        </div>

            
      </div>


    </div>
    </>
   
  )
}
