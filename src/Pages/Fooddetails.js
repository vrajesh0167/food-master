import React, { useState } from 'react'
import Helmet from '../Component/Helmet'
import TitlePage from './TitlePage.js/TitlePage'
import products from '../API/products'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

// review images
import review1 from '../images/comm1.jpg'
import review2 from '../images/comm2.jpg'
import review3 from '../images/comm3.jpg'
import review4 from '../images/comm4.jpg'
import review5 from '../images/comm5.jpg'
import review6 from '../images/comm6.jpg'
import Product from '../Category/Product'

export default function Fooddetails() {

    const [tab, setTab] = useState('desc')

    const { id } = useParams();
    const product_item = products.find(product => product.id === id);
    const [itemImg, setItemImg] = useState(product_item.image01)

    const { title, old_price, price, desc, category } = product_item;

    useEffect(() => {
        setItemImg(product_item.image01);
        window.scrollTo(0, 0)
    }, [product_item]);

    const relatedProduct = products.filter(item => item.category === category)
    return (
        <Helmet title={'Foods Details'}>
            <TitlePage title={title}></TitlePage>

            <section className='foods_details_section'>
                <div className=' container'>
                    <div className='foods_details'>
                        <div className='foods_imgs'>
                            <div className='product_main_img align-self-center' >
                                <img src={itemImg} alt="" />
                                <div className='item_category'>
                                    <p className='mb-0'>{category}</p>
                                </div>
                            </div>
                            <div className='item_imges text-center'>
                                <div className='item_im_bg' onClick={() => setItemImg(product_item.image01)}>
                                    <img src={product_item.image01} alt="" />
                                </div>
                                <div className='item_im_bg' onClick={() => setItemImg(product_item.image02)}>
                                    <img src={product_item.image02} alt="" />
                                </div>
                                <div className='item_im_bg' onClick={() => setItemImg(product_item.image03)}>
                                    <img src={product_item.image03} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='foods_info'>
                            <div>
                                <h2 className='mb-4'>{title}</h2>
                                <div className='item_price mb-4'>
                                    <p className='mb-0' style={{ color: '#b8b8b8' }}><del>₹{old_price} </del></p>
                                    <p className='mb-0' style={{ color: '#274c5b' }}>₹{price}</p>
                                </div>
                                <div className='item_content mb-4'>
                                    <p>{desc}</p>
                                </div>

                                <button className='btn1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Description & Review */}
                    <div className='tab d-flex align-items-center justify-content-center gap-5 mt-5 mb-4'>
                        <h5 className={`tabs ${tab === 'desc' ? 'tabs_active' : ''}`} onClick={() => setTab('desc')}>Description</h5>
                        <h5 className={`tabs ${tab === 'review' ? 'tabs_active' : ''}`} onClick={() => setTab('review')}>Review</h5>
                    </div>
                    {
                        tab === 'desc' ? (
                            <div className='tab_content'>
                                <p>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quaerat accusamus laborum nam, ex sequi ratione rem distinctio illo perferendis rerum praesentium quos.</p>
                            </div>
                        ) : (
                            <div className='tab_form mt-5'>
                                {/* comment 1 */}
                                <div className=' review'>
                                    <div className=' d-flex'>
                                        <div className='review_img'>
                                            <img src={review1} alt="" />
                                        </div>
                                        <div className='review_content'>
                                            <h5>Georgia Reader <i class="ri-reply-fill"></i> Reply</h5>
                                            <time>06 June,2023</time>
                                            <p className=' mt-2'>Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' review mt-5'>
                                    {/* comment 2 */}
                                    <div className='d-flex'>
                                        <div className='review_img'>
                                            <img src={review2} alt="" />
                                        </div>
                                        <div className='review_content'>
                                            <h5>Aron Alvarado <i class="ri-reply-fill"></i> Reply</h5>
                                            <time>06 June,2023</time>
                                            <p className=' mt-2'>Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review mt-5 ps-5'>
                                    {/* comment 2 reply 1 */}
                                    <div className='d-flex'>
                                        <div className='review_img'>
                                            <img src={review3} alt="" />
                                        </div>
                                        <div className='review_content'>
                                            <h5>Lynda Small <i class="ri-reply-fill"></i> Reply</h5>
                                            <time>06 June,2023</time>
                                            <p className=' mt-2'>Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae. Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat. Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.</p>
                                        </div>
                                    </div>
                                    {/* comment 2 reply 2 */}
                                    <div className=' mt-5 ps-5'>
                                        <div className='d-flex'>
                                            <div className='review_img'>
                                                <img src={review4} alt="" />
                                            </div>
                                            <div className='review_content'>
                                                <h5>Sianna Ramsay <i class="ri-reply-fill"></i> Reply</h5>
                                                <time>06 June,2023</time>
                                                <p className=' mt-2'>Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' review mt-5'>
                                    {/* comment 3 */}
                                    <div className='d-flex'>
                                        <div className='review_img'>
                                            <img src={review5} alt="" />
                                        </div>
                                        <div className='review_content'>
                                            <h5>Nolan Davidson <i class="ri-reply-fill"></i> Reply</h5>
                                            <time>06 June,2023</time>
                                            <p className=' mt-2'>Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at. Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' review mt-5'>
                                    {/* comment 4 */}
                                    <div className='d-flex'>
                                        <div className='review_img'>
                                            <img src={review6} alt="" />
                                        </div>
                                        <div className='review_content'>
                                            <h5>Kay Duggan <i class="ri-reply-fill"></i> Reply</h5>
                                            <time>06 June,2023</time>
                                            <p className=' mt-2'>Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }  
                    <div className='product'>
                        {
                            relatedProduct.map((item) => {
                                return <div className='product_item' key={item.id}>
                                    <Product item={item}></Product>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </Helmet>
    )
}
