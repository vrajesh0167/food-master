import React from 'react'
import Header from './Header'
import Routers from '../Routes/Routers'
import Footer from './Footer'
import Carts from '../Cart/Carts'
import { useSelector } from 'react-redux'

export default function Layout() {
  const showCart = useSelector(state => state.cartUi.isCartVisible)
  return (
    <>
      <Header></Header>
      
      {showCart ? <Carts></Carts> : ''}
      <div>
        <Routers></Routers>
      </div>
      
      <Footer></Footer>
    </>
  )
}
