import React from 'react'
import { useDispatch } from 'react-redux';
import { ListGroupItem } from 'reactstrap'
import { cartAction } from '../Store/ShoppingCart/CartSlice';

export default function CartItem({item}) {
  const {id, title, price, image01, quantity, totalPrice } = item;

  const dispacth = useDispatch();

  //increment item
  const increment = () =>{
    dispacth(cartAction.additem({
      id,
      price,
      title,
      image01
    }))
  }

  //decrement item
  const decrement = () =>{
    dispacth(cartAction.removeItem(id));
  }

  //delete item
  const deleteItem = () =>{
    dispacth(cartAction.deleteItem(id));
  }
  return (
    <div>
      <ListGroupItem className=' carts_items_section'>
        <div className=' carts_items'>
          <div className='delete_btn d-flex justify-content-end'>
            <span onClick={deleteItem}><i className="ri-close-circle-fill"></i></span>
          </div>

          <div className='carts_items_info d-flex'>
            <img src={image01} alt="" />
          
            <div className=' carts_product_info'>
              <h3>{title}</h3>
              <p className=' d-flex gap-4 align-items-center mb-2'><span>₹{totalPrice}</span> x {quantity}</p>
              
              <div className=' increment_decremet d-flex align-items-center justify-content-between'>
                <span className='decrement' onClick={decrement}><i className="ri-subtract-fill"></i></span>
                <span className='quantity'>{quantity}</span>
                <span className='increment' onClick={increment}><i className="ri-add-fill"></i></span>
              
              </div>
            </div>
          </div>

        </div>
      </ListGroupItem>
    </div>
  )
}
