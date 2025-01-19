import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

  const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)  
 
  return (
    <Link to="/cart" className="cartWidget">
      <p className="category">{totalQuantity()}</p>
      <img className="img-cardwidget" src="./src/assets/carrito_compra.svg"></img>
    </Link>
  )
 } 

export default CartWidget
