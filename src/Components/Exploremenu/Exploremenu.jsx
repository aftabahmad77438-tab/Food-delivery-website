import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'


const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu'>
            <h2>Explore menu</h2>
            <p className='explorep'>We've made ordering your favorite meals easier than ever—simply browse our digital menu,<br></br>
             customize your dishes, and add them to your cart with just a few clicks. </p>

             <div className="menulist">

                {menu_list.map((item,index)=>{

                        return(

                            <div onClick={()=>{setcategory(prev =>prev===item.menu_name?'All':item.menu_name)}} key={index} className="eachitem">

                                <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>



                            </div>

                        )


                })}
                   



             </div>
              
      
    </div>
  )
}

export default Exploremenu
