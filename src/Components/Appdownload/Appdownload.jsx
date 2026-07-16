import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='appdownload' id='download'>
        <h2>FOR BETTER EXPERIENCE DOWNLOAD <br/> TOMATO APP</h2>
        <div className="downloadimages">

            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>
      
    </div>
  )
}

export default Appdownload
