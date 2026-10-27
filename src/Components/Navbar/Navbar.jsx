import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../../Context/Storecontext'

const Navbar = () => {
  const [hrtag, sethrtag] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const { basketcount } = useContext(StoreContext)
  const location = useLocation()

  // scroll to the hash target (or top) after every navigation
  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <div className='Navbar'>
      <div className="logo">
        <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      </div>

      <div className={`ul ${menuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => { sethrtag('home'); setMenuOpen(false) }}>
          Home {hrtag === 'home' && <hr />}
        </Link>
        <Link to='/#display' onClick={() => { sethrtag('menu'); setMenuOpen(false) }}>
          Menu {hrtag === 'menu' && <hr />}
        </Link>
        <Link to='/#download' onClick={() => { sethrtag('mobile'); setMenuOpen(false) }}>
          Mobile-app {hrtag === 'mobile' && <hr />}
        </Link>
        <Link to='/#contact' onClick={() => { sethrtag('contact'); setMenuOpen(false) }}>
          Contact us {hrtag === 'contact' && <hr />}
        </Link>
      </div>

      <div className="right">
        <img src={assets.search_icon} alt="search" />

        <div className='basket'>
          <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
          <p>{basketcount()}</p>
        </div>

        <Link to='/login'><button>sign in</button></Link>

        <div className='hamburger' onClick={toggleMenu}>
          <span className={menuOpen ? 'line active' : 'line'}></span>
          <span className={menuOpen ? 'line active' : 'line'}></span>
          <span className={menuOpen ? 'line active' : 'line'}></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
