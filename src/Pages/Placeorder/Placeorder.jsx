import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/Storecontext'
const Placeorder = () => {
  const {gettotalamount}=useContext(StoreContext);
  return (
    <div className='placeorder'>

      <form>

        <div className="a">

          <input type='text' placeholder='Enter first name'></input>
          <input type='text' placeholder='Enter last name'></input>

        </div>
        <div className="a">

          <input type='text' placeholder='city'></input>
          <input type='text' placeholder='sector name'></input>

        </div>
        <div className="a">

          <input type='text' placeholder='street number'></input>
          <input type='text' placeholder='house number'></input>

        </div>
        <div className="a">

          <input type='text' placeholder='mobile number'></input>
          <input type='email' placeholder='e-mail'></input>

        </div>

      </form>

      <div className="payment">

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
          <p>${ gettotalamount()===0?0:gettotalamount()+3}</p>
         </div>

         <button className='tbtn'>procced to payment</button>
          
      </div>



    </div>
  )
}

export default Placeorder
