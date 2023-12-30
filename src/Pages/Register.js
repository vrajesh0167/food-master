import React from 'react'
import Helmet from '../Component/Helmet'
import TitlePage from './TitlePage.js/TitlePage'
import resLogo from '../images/res-logo.png'
import { Link } from 'react-router-dom'
import firebase from '../Database/Firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import Success from './Success'

const fireAuth = getAuth(firebase);

export default function Register() {

    const [isSumitted, setIsSumitted] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const names = event.target.names.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const phone = event.target.phone.value;
        const birth = event.target.birth.value;

        setIsSumitted(true);

        createUserWithEmailAndPassword(fireAuth, email, password, names, phone, birth)
            .then((data) => {
                alert('Successfully created new account')
                console.log('Successfully created new account ', data.user);
            })
            .catch((err) => {
                alert("Error creating a new account");
                console.log('Error creating a new account ', err)
            })

    }

    return (
        <Helmet title={'Register'}>
            <TitlePage title={'Register'}></TitlePage>

            <section className='register_section'>
                <div className=' container'>
                    <form action="" onSubmit={submitHandler}>
                        <div className='register_head d-flex justify-content-between align-items-center'>
                            <div>
                                <h3>Personal Details</h3>
                                <p>Edit your Name, Email, Phone Number and Birth date</p>
                            </div>
                            <div>
                                <button type='submit' className='data_save_btn'>Save Data</button>
                            </div>
                        </div>


                        <div className='register_form'>
                            <div className='register_img'>
                                <img src={resLogo} alt="" />
                                <h3>Food Master</h3>
                            </div>
                            {
                                isSumitted ? (
                                    <Success></Success>
                                ) : (
                                    <div className='user_info'>
                                        <div className='input-container'>
                                            <label className=' input_label'>Enter your full name *</label>
                                            <input type="text" name='names' className='input form-control' placeholder="Enter your full name here" required />
                                        </div>
                                        <div className='input-container'>
                                            <label className=' input_label'>Enter your email ID *</label>
                                            <input type="email" name='email' className='input form-control' placeholder="Enter your email ID here" required />
                                        </div>
                                        <div className='input-container'>
                                            <label className=' input_label'>Enter your email ID password *</label>
                                            <input type="password" name='password' className='input form-control' placeholder="Enter your email ID password here" required />
                                        </div>
                                        <div className='input-container'>
                                            <label className=' input_label'>Enter your phone number *</label>
                                            <input type="number" name='phone' className='input form-control' placeholder="Enter your phone number here" required />
                                        </div>
                                        <div className='input-container'>
                                            <label className=' input_label'>Enter your birth date *</label>
                                            <input type="date" name='birth' className='input form-control' placeholder="Enter your birth date here" required />
                                        </div>
                                        <div className=' login_link text-center mt-5'>
                                            <h5>Already have an account ? <Link to={'/login'}>Login</Link></h5>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                </div>
            </section>
        </Helmet>
    )
}
