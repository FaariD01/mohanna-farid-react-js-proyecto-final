/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const ItemDetail = ({ product }) => {

  const { addProduct } = useContext(CartContext)


  const AddProductInCart = (count) => {

    //producto que vamos a añadir al carrito

      const productCar = { ...product, quantity: count } //copio todas las propiedades del objeto  // quantity cantidad que esta comprando
      addProduct(productCar)
    }
  

  return (
    <div className="item-detail">
      
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>
           
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: {product.price} U$D</p>
        <ItemCount stock={product.stock} AddProductInCart={AddProductInCart} />
      </div>
    </div>
  )
}

export default ItemDetail
