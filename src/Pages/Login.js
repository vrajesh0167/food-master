import React, { useState } from "react";
import Helmet from "../Component/Helmet";
import TitlePage from "./TitlePage.js/TitlePage";
import resLogo from "../images/res-logo.png";
import { Link } from "react-router-dom";
import firebase from "../Database/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Success from "./Success";

const fireAuth = getAuth(firebase);

export default function Login() {
    const [isSumitted, setIsSumitted] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setIsSumitted(true);

        signInWithEmailAndPassword(fireAuth, email, password)
            .then((data) => {
                alert("User logged in");
                console.log("User logged in", data.user);
            })
            .catch((error) => {
                console.log("Error logging in", error);
            });
    };
    return (
        <Helmet title={"Login"}>
            <TitlePage title={"Login"}></TitlePage>


            <section className="login_section">
                <div className=" container">
                    <form action="" onSubmit={loginHandler}>
                        <div className="login_head d-flex align-items-center justify-content-between">
                            <div>
                                <h3>Personal Details</h3>
                                <p>Edit your name Email and password</p>
                            </div>
                            <div>
                                <button className="login_btn">Login</button>
                            </div>
                        </div>
                        <div className=" login_form">
                            <div className="login_img">
                                <img src={resLogo} alt="" />
                                <h3>Food Master</h3>
                            </div>
                            {isSumitted ? (
                                <Success></Success>
                            ) : (
                                <div className="login_info">
                                    <div className="imput-container">
                                        <label className=" input-label">
                                            Enter your full name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className=" form-control input"
                                            placeholder="Enter your full name"
                                            required
                                            autoComplete="true"
                                        />
                                    </div>
                                    <div className="imput-container">
                                        <label className=" input-label">
                                            Enter your email ID *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className=" form-control input"
                                            placeholder="Enter your email ID"
                                            required
                                            autoComplete="false"
                                        />
                                    </div>
                                    <div className="imput-container">
                                        <label className=" input-label">
                                            Enter your email ID password *
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className=" form-control input"
                                            placeholder="Enter your email ID password"
                                            required
                                            autoComplete="false"
                                        />
                                    </div>
                                    <div className=" register_link text-center mt-5">
                                        <h5>
                                            Don't have an account ? Create an account{" "}
                                            <Link to={"/register"}>Register</Link>
                                        </h5>
                                    </div>
                                </div>
                            )
                            }
                        </div >
                    </form >
                </div >
            </section >
        </Helmet >
    );
}
