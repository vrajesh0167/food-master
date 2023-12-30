import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { CartActionUi } from '../Store/ShoppingCart/CartSliceUi';
import { Link } from 'react-router-dom';

export default function Carts() {
    const dispatch = useDispatch();
    // cartItem
    const cartProduct = useSelector(state => state.cart.CartItem);
    const TotalAmount = useSelector(state => state.cart.totalAmount)

    const cartShow = useSelector(state => state.cartUi.isCartVisible)

    // toggle cart
    const toggleCart = () =>{
        dispatch(CartActionUi.toggle())
    }
    return (
        <div>
            <div className='carts_section'>
                <div className={`carts ${cartShow ? 'active_show' : ''}`}>
                    <div className='carts_close_btn d-flex align-items-center  justify-content-between'>
                        <h4 className=' mb-0'>Cart item</h4>
                        <span onClick={toggleCart}><i className="ri-close-circle-fill"></i></span>
                    </div>

                    <div className=' carts_item_list'>
                        {cartProduct.length === 0 ? (<h5 className=' text-center mt-5'>No item added to the cart</h5>) : (cartProduct.map((item,index) => {
                            return <CartItem key={index} item={item}></CartItem>
                        }))}
                    </div>

                    <div className='carts_Button'>
                        <h6 className=' mb-2'>Subtotal amount: <span>₹{TotalAmount}</span></h6>
                        <Link to='/checkout' onClick={toggleCart}><button>Check Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
