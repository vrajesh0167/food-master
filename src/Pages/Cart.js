import React from 'react'
import Helmet from '../Component/Helmet'
import TitlePage from './TitlePage.js/TitlePage'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Store/ShoppingCart/CartSlice'

export default function Cart() {
    const cartItem = useSelector(state => state.cart.CartItem);

    const TotalQuantity = useSelector(state => state.cart.totalQuantity);
    const TotalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <Helmet title={'Cart'}>
            <TitlePage title='Your Cart'></TitlePage>

            <section className='cart_section'>
                <div className=' container'>
                    {
                        cartItem.length === 0 ? (
                            <div>
                                <div className=' cart_table'>
                                    <table className=' table table-bordered text-center'>
                                        <thead>
                                            <tr className=' text-center align-middle'>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className=' text-center mt-5'>
                                    <h2 className=' mb-4'>Your Cart is Empty</h2>
                                    <Link to='/foods'><button className='shopping_cart'>Go To Shopping</button></Link>
                                </div>
                            </div>
                        ) : (
                            <div className=' cart_table'>
                                <table className=' table table-bordered'>
                                    <thead>
                                        <tr className=' text-center align-middle'>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItem.map(item => <Tr key={item.id} item={item}></Tr>)
                                        }
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th colSpan='4'>
                                                <div className=' text-center align-middle'>
                                                    <h4 className=' my-2'>Total Quantity:</h4>
                                                </div>
                                            </th>
                                            <td>
                                                <div className=' text-center align-middle'>
                                                    <h4 className=' my-2'>{TotalQuantity}</h4>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan='4'>
                                                <div className=' text-center align-middle'>
                                                    <h4 className=' my-2'>Total Amount:</h4>
                                                </div>
                                            </th>
                                            <td>
                                                <div className=' text-center align-middle'>
                                                    <h4 className=' my-2'>₹{TotalAmount}</h4>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='page_btn mt-5'>
                                    <Link to='/foods'><button className='shopping_cart'>Go To Shopping</button></Link>
                                    <Link to='/checkout'><button className='checkout_btn'>Proceed to checkout</button></Link>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>

        </Helmet>
    )
}

const Tr = (props) => {
    const {image01, title, totalPrice, quantity, id} = props.item;

    const dispatch = useDispatch();

    const deleteProduct = () =>{
        dispatch(cartAction.deleteItem(id))
    }
    return (
        <tr>
            <td className=' text-center align-middle cart_box_img'><img src={image01} alt="" /></td>
            <td className=' text-center align-middle'>{title}</td>
            <td className=' text-center align-middle'>₹ {totalPrice}</td>
            <td className=' text-center align-middle'>{quantity}</td>
            <td className=' text-center align-middle' onClick={deleteProduct}><i className="ri-delete-bin-6-line delete_ico"></i></td>
        </tr>
    )
}
