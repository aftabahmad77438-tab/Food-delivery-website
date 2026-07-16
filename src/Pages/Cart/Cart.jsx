import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/Storecontext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  // const {gettotalamount}=useContext(StoreContext);

  const navigate=useNavigate();
  
  const{food_list, cartitems, setcartitems, addtocartitem, removefromcart,gettotalamount}=useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="carttitle">
          <p>item</p>
          <p>name</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          
          <p>remove</p>

      </div>
      

      {food_list.map((item,index)=>{
        if(cartitems[item._id]>0){


          return(
            <div className="object">
              <img className='photo' src={item.image}/>
              <p>{item.name}</p>
              <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
              <p>${item.price*cartitems[item._id]}</p>
            
              <img onClick={()=>removefromcart(item._id)} className='remove' src={assets.cross_icon}/>



            </div>
          )
        }
      })}

      <div className="total">

        <h2>cart total</h2>

        <div className="subtotal">
          <p>subtotal</p>
          <p>${gettotalamount()}</p>
        </div>

        <div className="delivery">
          <p>Delivery charges</p>
          <p>${gettotalamount()===0?0:3}</p>

        </div>
         <div className="totalall">

          <p>total amount</p>
          <p>${gettotalamount()===0?0:gettotalamount()+3}</p>
         </div>

         <button onClick={()=>navigate('/placeorder')} className='tbt'>click to procced</button>
          





      </div>





    </div>
  )
}

export default Cart
