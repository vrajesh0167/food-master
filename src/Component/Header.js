import React, { useState } from 'react'
import logo from '../images/res-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { CartActionUi } from '../Store/ShoppingCart/CartSliceUi';

export default function Header() {
    // mobile media
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    // cart item
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const dispatch = useDispatch();
    // cart togglew
    const toggleCart = () =>{
        dispatch(CartActionUi.toggle())
    };

    const cartShow = useSelector(state => state.cartUi.isCartVisible);

    const nav__link = [
        {
            display: "Home",
            path: "/home"
        },
        {
            display: "Allfood",
            path: "/foods"
        },
        {
            display: "Cart",
            path: "/cart"
        },
        {
            display: "Contact",
            path: "/contact"
        }
    ]

    const [activeLink, setActiveLink] = useState('/home')

    return (
        <div className='header_section'>
            <header className=' pt-3 position-relative'>
                <div className="Navbar justify-content-between">
                    <div className='logo '>
                        <figure className='d-flex flex-column align-items-center justify-content-center'>
                            <img src={logo} alt="logo" />
                            <figcaption>Food Master</figcaption>
                        </figure>
                    </div>
                    <ul className={`Nav-menu ${isActive ? 'active' : ''}`}>
                        {/* Add your menu items here */}
                        {
                            nav__link.map((item, index) => {
                                return (
                                    <li key={index} className='nav-item'>
                                        <NavLink to={item.path} onClick={() => setActiveLink(item.path)} className={`nav-tab ${activeLink === item.path ? 'active_menu' : ''}`}>{item.display}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className=' d-flex gap-3'>
                        <div className='text-center nav_ico'>
                            <span className=' position-relative' onClick={toggleCart} ><i className={`ri-shopping-cart-fill ${cartShow ? 'active_show':''}`} ></i><sup>{totalQuantity}</sup></span>
                            <Link to={'/login'} ><i className="ri-account-circle-fill"></i></Link>
                        </div>
                        <button className={`nav-res ${isActive ? 'active' : ''}`} onClick={toggleNav}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div >
        </header>
        </div >
    )
}
