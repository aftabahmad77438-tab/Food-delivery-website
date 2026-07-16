import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/Storecontext';
const Navbar = () => {

  const [hrtag, sethrtag] = useState('home');

  const [display, setdisplay] = useState('one')
  const {basketcount}=useContext(StoreContext);
  return (
    <div className='Navbar'>

      <div className="logo">
       <Link to='/'><img src={assets.logo} /></Link> 
      </div>

      <div className="ul">
        { display === 'one' ? <li onClick={() => sethrtag('home')}>Home {hrtag === 'home' ? <hr /> : <></>} </li> : <Link to='/'>  <li onClick={() => sethrtag('home')}>Home {hrtag === 'home' ? <hr /> : <></>} </li> </Link>}
        {display === 'one' ? <a href='#display' onClick={() => sethrtag('menu')}>Menu {hrtag === 'menu' ? <hr /> : <></>}</a> : <Link to='/'>      <a href='#display' onClick={() => sethrtag('menu')}>Menu {hrtag === 'menu' ? <hr /> : <></>}</a>  </Link>}
        {display === 'one' ? <a href='#download' onClick={() => sethrtag('mobile')}>Mobile-app {hrtag === 'mobile' ? <hr /> : <></>}</a> : <Link to='/'>      <a href='#download' onClick={() => sethrtag('mobile')}>Mobile-app {hrtag === 'mobile' ? <hr /> : <></>}</a></Link>}
        <a href='#contact' onClick={() => sethrtag('contact')}>Contact us {hrtag === 'contact' ? <hr /> : <></>}</a>

      </div>

      <div className="right">
        <img src={assets.search_icon} />

        <div className='basket'>

        <Link to='/cart'>  <img src={assets.basket_icon} /></Link> 
          <p>{basketcount()}</p>

        </div>

        <Link to='/login'><button onClick={() => setdisplay('two')}>sign in</button>   </Link>

      </div>


    </div>
  )
}

export default Navbar
