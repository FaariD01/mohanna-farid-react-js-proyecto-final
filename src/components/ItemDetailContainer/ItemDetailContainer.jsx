import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState({})
  

    const { idProduct } = useParams()  //Desestrucuramos
    

    useEffect(() =>{

        getProducts()
        .then((data) => {
            const productFind = data.find((dataProduct) => dataProduct.id === idProduct)  // .find devuelve un objeto si usamos .filter devuelve un array y tirar error.
            setProduct(productFind)
        })


    },[idProduct]) //Cambia cuando cambia el id

    return (
    
        <ItemDetail product={product} />
  )
}

export default ItemDetailContainer
