/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import "./cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)


  
    if( cart.length === 0 ){
      return(
        <div className="empty-cart">
          <h2 className="title-empty-cart">Oppps...No hay productos en el carrito 😥</h2>
          <Link to="/" className="button-home-empty-cart" >Volver al inicio</Link>
        </div>
      )
    }

  return (
    <div className='cart'>
      <h2 className="title-cart">Productos en el carrito </h2>
      <div className='informacionDeCompra'>
        <ul className='cart-list'>

          {
            cart.map((productCart) => (
                <li key={productCart.id}>
                    <img src={productCart.image} width={200}></img>
                    <p>{productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio c/u: {productCart.price} U$D</p>
                    <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >Eliminar producto</button>
                </li>
            ))
          }
        </ul>
        <div className='resumenDeCompra'>
          <h3>Resumen de compra</h3>
          <p className='price-buys'>Total: {totalPrice()} U$D</p>
          <Link className='button-to-cart' to="/checkout">Continuar con mi compra</Link>
          <button className='button-delete-cart' onClick={deleteCart}>Vaciar Carrito</button>
        </div>

      </div>
    </div>
  )
}

export default Cart
