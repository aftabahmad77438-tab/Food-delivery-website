import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>

        <div className="heads">
                <h2>Order your </h2>
                <h2>favourite food here</h2>

        </div>

        <div className="paragraph">

            <p>We've made ordering your favorite meals easier than ever—simply browse our digital menu,
             customize your<br></br> dishes, and add them to your cart with just a few clicks. Whether you're craving a 
             juicy burger, a fresh salad,<br></br> or our chef's special pasta, our secure checkout process ensures your 
             order is placed quickly and accurately. </p>

           <button>view menu</button>
        </div>


      
    </div>
  )
}

export default Header
