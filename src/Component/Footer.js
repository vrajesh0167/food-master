import React from 'react'
import logo from '../images/res-logo.png'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <section className='footer_section'>
                <Container>
                    <Row>
                        <Col lg="3" md="6">
                            <div className='footer_logo'>
                                <figure>
                                    <img src={logo} alt="res-logo" />
                                    <figcaption><h5>Food Master</h5></figcaption>
                                </figure>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>

                        <Col lg="3" md="6">
                            <h3>Delivery Time</h3>
                            <ListGroup>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <span>Sunday - Thursday</span>
                                    <p>10.00am - 11.00pm</p>
                                </ListGroupItem>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <span>Friday - Saturday</span>
                                    <p>Off Day</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col lg="3" md="6">
                            <h3>Contact</h3>
                            <ListGroup>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <address className=' mb-0'>
                                        Food Master Res. <br />
                                        Varachha 395006, Suart
                                    </address>
                                </ListGroupItem>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <p className=' mb-0'> <span>Phone:</span> 76218 54618</p>
                                </ListGroupItem>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <p className=' mb-0'><span>Email:</span> foodmaster@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col lg="3" md="6">
                            <h3>Newsletter</h3>
                            <ListGroup>
                                <ListGroupItem className=' delivery_time border-0 ps-0'>
                                    <p className=' mb-0'>Subscribe our newsletter</p>
                                </ListGroupItem>
                            </ListGroup>
                            <div className='newsletter'>
                                <input type="email" placeholder='Enter Your Email' />
                                <span><i className="ri-send-plane-fill"></i></span>
                            </div>
                            <div className='social_link mt-4'>
                                <span>
                                    <Link to="" className=' text-decoration-none'><i className="ri-facebook-circle-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to="" className=' text-decoration-none'><i className="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to="" className=' text-decoration-none'><i className="ri-youtube-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to="" className=' text-decoration-none'><i className="ri-linkedin-box-fill"></i></Link>
                                </span>
                            </div>
                        </Col>
                    </Row>

                    <Row className=' mt-5'>
                        <Col className='copyright_text text-center'>
                            <p>Copyright - 2023, website made by <span>Vrajesh Chovatiya</span>. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
