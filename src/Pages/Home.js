import React, { useState } from 'react'
import HomeCategory from '../Category/HomeCategory'

import hero from '../images/hero.png'
import service_01 from '../images/service-01.png'
import service_02 from '../images/service-02.png'
import service_03 from '../images/service-03.png'
import hamburger from '../images/hamburger.png'
import pizza from '../images/pizza.png'
import bread from '../images/bread.png'
import location_img from '../images/location.png'
import network from '../images/network.png'
import ava02 from '../images/ava-2.jpg'

import Product from '../Category/Product'
import products from '../API/products'
import { useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from '../Component/Helmet'
import { Link } from 'react-router-dom'

export default function Home() {
    const [category, setCategory] = useState('All');
    const [allProduct, setAllproduct] = useState(products)


    useEffect(() => {
        if (category === 'All') {
            setAllproduct(products)
        }

        if (category === 'Burger') {
            const filterProduct = products.filter((item) => item.category === 'Burger');
            setAllproduct(filterProduct);
        }

        if (category === 'Pizza') {
            const filterProduct = products.filter((item) => item.category === 'Pizza');
            setAllproduct(filterProduct);
        }

        if (category === 'Bread') {
            const filterProduct = products.filter((item) => item.category === 'Bread');
            setAllproduct(filterProduct);
        }
    }, [category]);

    const [hotpizza, setHotpizza] = useState([]);

    useEffect(() => {
        const filterProduct = products.filter((item) => item.category === 'Pizza')
        const slicepizza = filterProduct.slice(0, 3)
        setHotpizza(slicepizza);
    }, []);
    return (
        <Helmet title={"Home"}>
            {/*====================== section 1 ===========================*/}
            <section className='home_section'>
                <div className=' container'>
                    <div className='home'>
                        <div className='home_details'>
                            <p>Easy way to make an order</p>
                            <h1 className=' mb-4'>
                                <span>HUNGRY?</span> Just wait <br />
                                food at <span>your door</span>
                            </h1>
                            <p className=' mb-4'>The smart 365-days-per-year food subscription that will make you eat</p>
                            <Link to={'/foods'}><button className='btn1 order_btn'>Order Now <i className="ri-arrow-right-s-line"></i></button></Link>
                            <Link to={'/foods'}><button className='btn1 see_all_btn'>See all foods</button></Link>
                            <div className=' d-flex mt-5 home_services'>
                                <div className='foods_secure d-flex align-items-center'>
                                    <div className='secure_ico'>
                                        <i className="ri-shield-check-line"></i>
                                    </div>
                                    <p className=' mb-0'>100% Secure Chheckout</p>
                                </div>
                                <div className='foods_secure d-flex align-items-center'>
                                    <div className='secure_ico'>
                                        <i className="ri-car-line"></i>
                                    </div>
                                    <p className=' mb-0'>No shipping charge</p>
                                </div>
                            </div>
                        </div>
                        <div className='home_img'>
                            <img src={hero} alt="hero" />
                        </div>

                    </div>
                </div>
            </section>

            {/*============================== section 2 ============================*/}
            <HomeCategory></HomeCategory>

            {/*============================== section 3 ============================*/}
            <section className='serve_section'>
                <div className=' container'>
                    <div className='server_details text-center'>
                        <p>What we serve</p>
                        <h2 className=' mb-4'>Just sit back at home <br /> we will <span>yack care</span></h2>
                        <p>lorem ipsum is simply dummy text of the printing and typesetting <br /> industry. Lore ipsum has been the induatry's standard even since the</p>
                    </div>
                    <div className='serve '>
                        <div className='serve_item text-center'>
                            <img src={service_01} alt="service_01" />
                            <h4 className=' mt-3 mb-3'>Quickk Delivery</h4>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lore ipsum has been the induatry's standard even since the</p>
                        </div>
                        <div className='serve_item text-center'>
                            <img src={service_02} alt="service_02" />
                            <h4 className=' mt-3 mb-3'>Super Dine in</h4>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lore ipsum has been the induatry's standard even since the</p>
                        </div>
                        <div className='serve_item text-center'>
                            <img src={service_03} alt="service_03" />
                            <h4 className=' mt-3 mb-3'>Easy Pick Up</h4>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lore ipsum has been the induatry's standard even since the</p>
                        </div>
                    </div>
                </div>
            </section>


            {/*=================== section 4 =========================*/}
            {/*==================== foods_section =================*/}
            <section className='foods_section'>
                <div className=' container'>
                    <div className='foods'>
                        <div className='foods_head text-center'>
                            <h2 className=' mb-4'>Popular Foods</h2>
                            <div className='foods_item_menu d-flex align-items-center justify-content-center'>
                                <ul className=' list-unstyled d-inline mb-0'>
                                    <li>
                                        <button className={`foods_item_btn ${category === 'All' ? 'active_foods' : ''}`} onClick={() => setCategory('All')}>All</button>
                                    </li>
                                    <li>
                                        <button className={`foods_item_btn ${category === 'Burger' ? 'active_foods' : ''}`} onClick={() => setCategory('Burger')}><img src={hamburger} alt="" />Burger</button>
                                    </li>
                                    <li>
                                        <button className={`foods_item_btn ${category === 'Pizza' ? 'active_foods' : ''}`} onClick={() => setCategory('Pizza')}><img src={pizza} alt="" />Pizza</button>
                                    </li>
                                    <li>
                                        <button className={`foods_item_btn ${category === 'Bread' ? 'active_foods' : ''}`} onClick={() => setCategory('Bread')}><img src={bread} alt="" />Bread</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='product'>
                            {
                                allProduct.map((item) => {
                                    return (
                                        <div className='product_item' key={item.id}>
                                            <Product item={item}></Product>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/*=================== section 5 =========================*/}
            {/*==================== tasty_treat_section =================*/}

            <section className='tasty_treat_section'>
                <div className=' container'>
                    <div className=' tasty_treat'>
                        <div className='tasty_treat_img'>
                            <img src={location_img} alt="location" />
                        </div>
                        <div className='tasty_treat_info align-self-center'>
                            <h2 className=' mb-3'>Why Tasty Treat?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>

                            <ListGroup className=' mt-5'>
                                <ListGroupItem className=' border-0 ps-0'>
                                    <p className=' mb-0'><i className="ri-arrow-right-double-fill"></i> <span>Fresh and tasty Foods</span></p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,  voluptatibus.</p>
                                </ListGroupItem>
                                <ListGroupItem className=' border-0 ps-0'>
                                    <p className=' mb-0'><i className="ri-arrow-right-double-fill"></i> <span>Quality support</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum ipsa eaque doloribus!</p>
                                </ListGroupItem>
                                <ListGroupItem className=' border-0 ps-0'>
                                    <p className=' mb-0'><i className="ri-arrow-right-double-fill"></i> <span>Order from any location</span></p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam non, repellendus eius adipisci veritatis.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </section>


            {/*======================= section 6 ===================*/}
            {/*==================== hot_pizza_section =============*/}
            <section className=' hot_piza_section'>
                <div className=' container'>
                    <div className=' hot_pizza'>
                        <div className=' hot_pizza_head text-center' >
                            <h2>Hot Pizza</h2>
                        </div>
                        <div className='product'>
                            {
                                hotpizza.map((item) => {
                                    return (
                                        <div className='product_item' key={item.id}>
                                            <Product item={item}></Product>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/*========================= section 7 =========================*/}
            {/*====================== review_section ===================*/}
            <section className='review_section'>
                <div className=' container'>
                    <div className='review'>
                        <div className=' review_info align-self-center'>
                            <p><span>Testimonial</span></p>
                            <h2 className='mb-4'>What our <span>customers</span> are saying</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum minima modi consequuntur commodi fuga facere, deleniti veritatis corporis possimus atque, accusamus cum.</p>


                            <div className='review_swiper_item mt-5'>
                                <p>" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla minus eaque doloribus, a rerum cum odit adipisci saepe, quod aspernatur, doloremque optio. Quo. "</p>
                                <div className=' item_img d-flex align-items-center mt-4'>
                                    <img src={ava02} alt="" />
                                    <h4>Jhon Doe</h4>
                                </div>
                            </div>

                        </div>
                        <div className='network_info'>
                            <img src={network} alt="network" />
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}
