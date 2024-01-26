import React, { useState } from "react";
import Helmet from "../Component/Helmet";
import TitlePage from "./TitlePage.js/TitlePage";
import { useSelector } from "react-redux";
import Success from "./Success";
import { Link } from "react-router-dom";

export default function Checkout() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [address, setAddress] = useState("");
    const [isSumitted, setIsSumitted] = useState(false);

    const SubTotal = useSelector((state) => state.cart.totalAmount);
    const HandlingCharges = SubTotal === 0 ? 0 : 35.24;
    const cgst = useSelector((state) => state.cart.cgst);
    const sgst = useSelector((state) => state.cart.sgst);

    const TotalPayable = SubTotal + Number(HandlingCharges) + cgst + sgst;

    // form submit
    const shippingInfo = [];
    const submitHandler = (e) => {
        e.preventDefault();
        const userShipping = {
            Fname: firstName,
            Lname: lastName,
            email: emailAddress,
            phone: phoneNumber,
            country: country,
            state: state,
            city: city,
            pincode: pinCode,
            address: address,
        };
        setIsSumitted(true);
        shippingInfo.push(userShipping);
        console.log("shippinginfo", shippingInfo);
    };

    return (
        <Helmet title={"Checkout"}>
            <TitlePage title={"Checkout"}></TitlePage>

            <section className="checkout_section">
                <div className=" container">
                    <div className="checkout">
                        <div className="checkout_form">
                            {isSumitted ? (
                                <Success></Success>
                            ) : (
                                <form action="" onSubmit={submitHandler}>
                                    <div className="checkout_form_input checkout_input mb-3">
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Frist Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Frist Name *"
                                                className=" form-control"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Last Name *"
                                                className=" form-control"
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="checkout_form_input checkout_input mb-3">
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                placeholder=" Email Address"
                                                className=" form-control"
                                                onChange={(e) => setEmailAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                inputMode=" numeric"
                                                placeholder="Phone Number"
                                                className=" form-control"
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="checkout_form_input checkout_input mb-3">
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Country"
                                                className=" form-control"
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                inputMode=" numeric"
                                                placeholder=" Your State"
                                                className=" form-control"
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="checkout_form_input checkout_input mb-3">
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your City"
                                                className=" form-control"
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Pin Code
                                            </label>
                                            <input
                                                type="text"
                                                inputMode=" numeric"
                                                placeholder=" Pin Code"
                                                className=" form-control"
                                                onChange={(e) => setPinCode(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="checkout_form_input">
                                        <div>
                                            <label htmlFor="" className=" form-label">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Address"
                                                className=" form-control"
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className=" d-flex justify-content-between">
                                        <button type="submit" className="payment_btn">
                                            Payment
                                        </button>
                                        <Link to={'/pdf'}>
                                            <button type="submit" className="payment_btn" onClick={generatePDF}>
                                                Dowload PDF
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            )}
                        </div>
                        <div className="charges_bills">
                            <h4>Total Charges</h4>
                            <div className="charges mt-4">
                                <h5 className=" d-flex align-items-center justify-content-between">
                                    Total payable <span>₹{TotalPayable.toFixed(2)}</span>
                                </h5>
                                <hr />
                                <h5 className=" d-flex align-items-center justify-content-between">
                                    Sub Total <span>₹{SubTotal}</span>
                                </h5>
                                <h5 className=" d-flex align-items-center justify-content-between">
                                    Handling Charges <span>₹{HandlingCharges}</span>
                                </h5>
                                <h5 className=" d-flex align-items-center justify-content-between">
                                    CGST <span>₹{cgst.toFixed(2)}</span>
                                </h5>
                                <h5 className=" d-flex align-items-center justify-content-between">
                                    SGST <span>₹{sgst.toFixed(2)}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
}
