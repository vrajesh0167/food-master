import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Allfood from "../Pages/Allfood";
import Fooddetails from "../Pages/Fooddetails";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import PDF from "../Component/PDF";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/foods" element={<Allfood></Allfood>}></Route>
                <Route
                    path="/foodsDetails/:id"
                    element={<Fooddetails></Fooddetails>}
                ></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/pdf" element={<PDF></PDF>}></Route>
            </Routes>
        </div>
    );
}
