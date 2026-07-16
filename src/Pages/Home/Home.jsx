import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import Displayproduct from '../../Components/Displayproducts/Displayproduct'
import Appdownload from '../../Components/Appdownload/Appdownload'
const Home = () => {
  const [category,setcategory]=useState('All');
  return (
    <div>

      <Header/>
      <Exploremenu category={category} setcategory={setcategory} />
      <Displayproduct category={category}/>
      <Appdownload/>
      
    </div>
  )
}

export default Home
