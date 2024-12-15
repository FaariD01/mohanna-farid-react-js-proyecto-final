import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <Link  to={ "/detail/"+product.id } className="item">
        <img src={product.image} className="img-item"></img>
        <p  className="text-item">{product.name}</p>
        <p className="text-item">Precio: {product.price} U$D</p>
        <p className="text-items">Ver Detalles</p>
    </Link>
  )
}

export default Item
