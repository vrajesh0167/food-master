import React from 'react'
import Helmet from '../Component/Helmet'

export default function Contact() {
    return (
        <Helmet title={'Contact'}>
            {/*-------------------------------------- contact_header_section -------------------------------*/}
            <section className='contact_header_section'>
                <div className=' container'>
                    <div className='contact_header text-center' data-aos="zoom-in">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </section>

            {/*------------------------- contact_section -----------------------------*/}
            <section className='contact_section'>
                <div className=' container'>
                    <div className='contact'>
                        <div className='contact_img' data-aos="fade-up" data-aos-delay="100">
                            <img src="asset/img/contact.jpg" alt="" />
                        </div>
                        <div className='contect_details'>
                            <div data-aos="fade-up" data-aos-delay="100">
                                <h2>Let's Find Out. Where Our Foods Master Located.</h2>
                                <p>Please contact us using the information below. To locate, contact us in the <br />nearest organic store or office closest to you, visit our office websites.</p>
                            </div>
                            <div className='contact_info'>
                                <div className='email_contact' data-aos="fade-up" data-aos-delay="200">
                                    <div className='email_contact_img'>
                                        <img src="asset/img/contact_mail.svg" alt="" />
                                    </div>
                                    <div className='email_contact_details'>
                                        <h4>Message</h4>
                                        <p>foodsmaster@gmail.com</p>
                                    </div>
                                </div>
                                <div className='email_contact' data-aos="fade-up" data-aos-delay="300">
                                    <div className='email_contact_img'>
                                        <img src="asset/img/contact_call.svg" alt="" />
                                    </div>
                                    <div className='email_contact_details'>
                                        <h4>Contact Us</h4>
                                        <p>+91 76218 54618</p>
                                    </div>
                                </div>
                            </div>
                            <div className='social_media d-flex mt-5' data-aos="fade-up" data-aos-delay="400">
                                <i className="ri-facebook-circle-fill ico1"></i>
                                <i className="ri-twitter-fill ico1"></i>
                                <i className="ri-instagram-line ico1"></i>
                                <i className="ri-pinterest-fill ico1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*---------------------------- location_section ------------------------------*/}
            <section className='location_section'>
                <div className=' container'>
                    <div className='location_sec'>
                        <div className='location_info' data-aos="fade-up" data-aos-delay="100">
                            <div className='location_title'>
                                <p>Location</p>
                                <h2>Our Shops</h2>
                                <p>Foods master shops are located in <br />main cities of the following places.</p>
                            </div>
                            <div className='location_details' data-aos="fade-up" data-aos-delay="200">
                                <div className=' d-flex'>
                                    <div className='location_img me-3'>
                                        <img src="asset/img/location_ico.svg" alt="" />
                                    </div>
                                    <div className='location_add'>
                                        <h4>New York, USA:</h4>
                                        <address>299 Park Avenue New York,<br />New York 10171, USA.</address>
                                    </div>
                                </div>
                            </div>
                            <div className='location_details mt-4' data-aos="fade-up" data-aos-delay="300">
                                <div className=' d-flex'>
                                    <div className='location_img me-3'>
                                        <img src="asset/img/location_ico.svg" alt="" />
                                    </div>
                                    <div className='location_add'>
                                        <h4>London, UK:</h4>
                                        <address>30 Stamford Street, Base Way,<br />London 5478, UK.</address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------------------------- contact_form_section ----------------------------------*/}
            <section className=' contact_form_section'>
                <div className=' container'>
                    <form action="" data-aos="fade-up" data-aos-delay="100">
                        <div className='form_input_area'>
                            <div className=' form_input_div'>
                                <label htmlFor="" className=' form-label'>Full Name*</label>
                                <input type="text" name='name' className='form-input' placeholder='Enter Your Name' />
                            </div>
                            <div className=' form_input_div'>
                                <label htmlFor="" className=' form-label'>Email Address*</label>
                                <input type="email" name='email' className='form-input' placeholder='Enter Your Email' required />
                            </div>
                        </div>
                        <div className='form_input_area'>
                            <div className=' form_input_div'>
                                <label htmlFor="" className=' form-label'>Company*</label>
                                <input type="text" name='company' className='form-input' placeholder='Enter Company Name' required />
                            </div>
                            <div className=' form_input_div'>
                                <label htmlFor="" className=' form-label'>Subject</label>
                                <input type="text" name='subject' className='form-input' placeholder='How We Can Help' required />
                            </div>
                        </div>
                        <div className='form_textarea'>
                            <label htmlFor="" className=' form-label'>Message</label>
                            <textarea name="message" maxLength={5000} className='form-textarea' placeholder="Hello There, I would like to..."></textarea>
                        </div>
                        <input type="submit" className='Sub_btn' value={"Send Meessage"} />
                    </form>
                </div>
            </section>
        </Helmet>
    )
}
