import React, { useContext, useState } from 'react'
import './Item.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Storecontext'
const Item = ({id,name,image,descrip,price,category}) => {

    const{cartitems,setcartitems,addtocartitem,removefromcart}=useContext(StoreContext);

    
  return (
    <div className='item'>
        <div className="image">
                <img src={image}/>

                {!cartitems[id]
                ?<img  className='add'   onClick={()=>addtocartitem(id)}src={assets.add_icon_white}/>
                :<div className='adding'>
                    <img onClick={()=>removefromcart(id)} style={{'width':'35px'}}  src={assets.remove_icon_red}/>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtocartitem(id)} style={{'width':'35px'}} src={assets.add_icon_green}/>
                    </div>
                }
        </div>

        <div className="rating">
            <p>{category}</p>
            
            <img src={assets.rating_starts}/>
        </div>
        <div className="descrip">
            <p>{descrip}</p>
        </div>
        <div className="price">
            <p>${price}</p>
        </div>

      
    </div>
  )
}

export default Item
