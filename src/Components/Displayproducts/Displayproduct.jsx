import React, { useContext } from 'react'
import './Displayproduct.css';
import { StoreContext } from '../../Context/Storecontext'
import Item from '../Item/Item'
const Displayproduct = ({category}) => {
    const {food_list}=useContext(StoreContext);
  return (
    <div className='displayproduct' id='display'>
        <h2>Trending items near you</h2>

        <div className='mapping'>
            {food_list.map((item,index)=>{
              if(category==='All'|| category===item.category){

                 return(

                            <Item key={index} id={item._id} 
                             name={item.name} category={item.category}
                              price={item.price}
                              descrip={item.description}
                              image={item.image}/>

                    )

              }

                   






            })}








        </div>




      
    </div>
  )
}

export default Displayproduct
