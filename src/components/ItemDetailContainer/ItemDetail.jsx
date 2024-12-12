
const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetail">
      <img src={product.image}></img>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: $ {product.price}</p>
    </div>
  )
}

export default ItemDetail
