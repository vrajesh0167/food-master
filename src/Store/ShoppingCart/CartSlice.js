import { createSlice, current } from "@reduxjs/toolkit";

const item = localStorage.getItem("CartItem") !== null ? JSON.parse(localStorage.getItem('CartItem')) : []
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0
const cgst = localStorage.getItem("cgst") !== null ? JSON.parse(localStorage.getItem('cgst')) : 0
const sgst = localStorage.getItem("sgst") !== null ? JSON.parse(localStorage.getItem('sgst')) : 0

const setItemFuc = (item, totalAmount, totalQuantity, cgst, sgst) =>{
    localStorage.setItem("CartItem", JSON.stringify(item));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
    localStorage.setItem("cgst", JSON.stringify(cgst));
    localStorage.setItem("sgst", JSON.stringify(sgst));
}

const initializeState = {
    CartItem: item,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
    cgst: cgst,
    sgst: sgst
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initializeState,

    reducers:{
        //================= Add Item =================
        additem(state, action){

            // console.log("action",action);
            const newItem = action.payload;
            const exitingItem = state.CartItem.find((item) => item.id === newItem.id)

            console.log("state.cartitem", current(state));
            state.totalQuantity++

            if(!exitingItem){
                state.CartItem.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01, 
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    cgst: newItem.cgst,
                    sgst: newItem.sgst,
                })
            }else{
                exitingItem.quantity++ ;
                exitingItem.totalPrice = Number(exitingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.CartItem.reduce((total, item) =>( total + Number(item.price) * Number(item.quantity)),0)
            state.cgst = state.CartItem.reduce((total, item) => (total + Number(item.cgst)),0)
            state.sgst = state.CartItem.reduce((total, item) => (total + Number(item.sgst)),0)
            console.log("state.cartitem",current(state));

            setItemFuc(state.CartItem.map(item => item), state.totalAmount, state.totalQuantity, state.cgst, state.sgst)
        },
        removeItem(state,action){

            // console.log(action.payload);
            const id = action.payload;
            const exitingItem = state.CartItem.find((item) => item.id === id);

            state.totalQuantity--

            if(exitingItem.quantity === 1){
                state.CartItem = state.CartItem.filter((item) => item.id !== id);
            }else{
                exitingItem.quantity-- 
                exitingItem.totalPrice = Number(exitingItem.totalPrice) - Number(exitingItem.price);
            }

            state.totalAmount = state.CartItem.reduce((total, item) => (total + Number(item.price) * Number(item.quantity)),0)

            setItemFuc(state.CartItem.map(item => item), state.totalAmount, state.totalQuantity, state.cgst, state.sgst)
        },
        deleteItem(state, action){

            const id = action.payload
            const exitingItem = state.CartItem.find((item) => item.id === id);

            state.totalQuantity -= exitingItem.quantity

            if(exitingItem){
                state.CartItem = state.CartItem.filter((item) => item.id !== id)
                exitingItem.totalPrice = Number(exitingItem.totalPrice) - Number(exitingItem.price);
                // state.totalQuantity = Number(state.totalQuantity) - Number(exitingItem.quantity)
            }

            state.totalAmount = state.CartItem.reduce((total, item) => (total + Number(item.price) * Number(item.quantity) ),0)

            setItemFuc(state.CartItem.map(item => item), state.totalAmount, state.totalQuantity, state.cgst, state.sgst)
        }
    }
})

export const cartAction = CartSlice.actions;
export default CartSlice;