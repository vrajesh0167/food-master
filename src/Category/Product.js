import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { cartAction } from '../Store/ShoppingCart/CartSlice';

export default function Product(props) {
    const { id, title, price, image01, cgst, sgst } = props.item;

    const dispatch = useDispatch();

    // const showCart = useSelector(state => state.cartUi.isCartVisible)

    const addToCart = () => {
        dispatch(cartAction.additem({
            id,
            title,
            price,
            image01,
            cgst,
            sgst
        }))
    }
    return (
        <div>
            <div className='foods_item_img text-center'>
                <figure className=' mb-4'>
                    <Link to={`/foodsDetails/${id}`}><img src={image01} alt="Product img" className=' mb-3' /></Link>
                    <figcaption><Link to={`/foodsDetails/${id}`} className=' text-decoration-none'><h4>{title}</h4></Link></figcaption>
                </figure>
            </div>
            <div className='foods_itrm_details d-flex align-items-center justify-content-between'>
                <p className=' mb-0'>₹{price}</p>
                <button className='add_cart_item_b' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}
