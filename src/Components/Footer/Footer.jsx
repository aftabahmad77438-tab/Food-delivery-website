import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
    
    <div className='footer' id='contact'>

        <div className="leftt">
            <img src={assets.logo}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,<br></br>
             iusto. Recusandae in alias fugiat ab quibusdam rerum deleniti, neque est,<br>
             </br> a sapiente pariatur delectus. Eveniet repellat dolorum recusandae odit culpa.</p>
            <div className="social">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>

        </div>

        <div className="centerr">

            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>


        </div>
        <div className="rightt">

            <h2>GET IN TOUCH</h2>
            
                <li>+92-3242343234</li>
                <li>tomato@gamil.com</li>
           

        </div>


      
      
    </div>
    <div className="copyright">

         <p>&copy; 2026 Aftab ahmad. All rights reserved.</p>

    </div>
      
      </>
  )
}

export default Footer
