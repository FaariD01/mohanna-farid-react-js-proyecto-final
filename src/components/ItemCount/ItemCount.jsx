import { useState } from "react"
import "./ItemCount.css"
const ItemCount = ( {stock, AddProductInCart}  ) => {

    const [count, setCount] = useState(1);

    const handleClickRemove = () => {
        if(count > 1){
            setCount( count - 1 )
        }         
    }

    const handleClickAdd = () => {
        if(count < stock){
            setCount( count + 1 )
        }   
    }
    
  return (
    <div className="contadorProducto">
      <div className="botones">
        <button onClick={handleClickRemove}>-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd}>+</button>
      </div>
      <button className="btn-addToCar" onClick={ () => AddProductInCart(count)}>Sumar al carrito</button>
    </div>
  )
}

export default ItemCount
