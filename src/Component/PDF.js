import React from "react";
import { useSelector } from "react-redux";
import { usePDF } from "react-to-pdf";

export default function PDF() {
    const CurrentDate = new Date(Date.now());
    const CurrentTime = new Date().getHours() + ":" + new Date().getMinutes();
    const { CartItem, totalQuantity, totalAmount, cgst, sgst } = useSelector(
        (state) => state.cart
    );
    const itemLenght = CartItem ? CartItem.length : 0;
    const HandlingCharges = totalAmount === 0 ? 0 : 35.24;
    const TotalPayable = totalAmount + Number(HandlingCharges) + cgst + sgst;
    const TotalTax = Number(HandlingCharges) + cgst + sgst;
    const { toPDF, targetRef } = usePDF({ filename: "post.pdf" });

    return (
        <div>
            <div ref={targetRef} className="pdf_section">
                <h3 className=" text-center mt-5">Food Master</h3>
                <h5 className=" text-center">
                    GST:- <span>24AASFJ0418NI21</span>
                </h5>
                <p className=" text-center">
                    DT:- <span>{CurrentDate.toLocaleDateString()}</span> TM:-{" "}
                    <span>{CurrentTime}</span>
                </p>

                <table className=" table ">
                    <thead>
                        <tr className=" text-center align-middle">
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartItem &&
                            CartItem.map((item) => <Tr key={item.id} item={item}></Tr>)}
                    </tbody>
                </table>

                <div className="NItem_NQty d-flex justify-content-around">
                    <p>
                        NItem:- <span>{itemLenght}</span>
                    </p>
                    <p>
                        NQty:- <span>{totalQuantity}</span>
                    </p>
                </div>
                <div className=" gst_total">
                    <p className=" d-flex justify-content-between mb-1">
                        SubTotal <span>{TotalPayable.toFixed(2)}</span>
                    </p>
                    <p className=" d-flex justify-content-between mb-1">
                        Taxable SubTotal <span>{totalAmount}</span>
                    </p>

                    <table className=" table mb-1">
                        <thead>
                            <tr>
                                <th>Taxable Amt</th>
                                <th>CGST</th>
                                <th>SGST</th>
                                <th>Handling Charges</th>
                                <th>TOl Tax</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=" text-center align-middle">{totalAmount}</td>
                                <td className=" text-center align-middle">{cgst}</td>
                                <td className=" text-center align-middle">{sgst}</td>
                                <td className=" text-center align-middle">{HandlingCharges}</td>
                                <td className=" text-center align-middle">{TotalTax}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className=" text-center my-3">
                        Final Amount: <span>₹ {TotalPayable.toFixed(2)}</span>
                    </h3>
                </div>
            </div>
            <div className=" text-center">
                <button onClick={() => toPDF()} className="pdf-btn mb-5">
                    Download PDF
                </button>
            </div>
        </div>
    );
}

const Tr = (props) => {
    const { title, totalPrice, quantity, price } = props.item;

    return (
        <tr>
            <td className=" text-start align-middle">{title}</td>
            <td className=" text-center align-middle">{quantity}</td>
            <td className=" text-center align-middle">{price}</td>
            <td className=" text-center align-middle">{totalPrice}</td>
        </tr>
    );
};
