import React from 'react';
import { useSelector } from 'react-redux';
import './card.scss'

const Card = () => {
    const { itemCard } = useSelector((state) => state.card);

    return (
        <div className='container'>

      <div className='block_cart'>
      <div className='cart_block'>
         
       
        <div>
              {/* {itemCard.map((el) => (
                <div key={el.id}>
                    <h3>{el.name}</h3>
                    <img width={250} src={el.images} alt="" />
                    {el.price}
                    
                </div>
            ))} */}
        </div>
 </div>

 <div>
 RESUMO
 </div>
      </div>

          
        </div>
    );
};

export default Card;
