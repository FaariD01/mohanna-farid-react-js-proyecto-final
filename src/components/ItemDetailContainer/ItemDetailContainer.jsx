import { useState, useEffect } from "react"
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState({})
  

    const { idProduct } = useParams()  //Desestrucuramos
    
    const getProduct = async () =>{
        try{
            const docRef = doc(db, "products" , idProduct)
            const dataDb = await getDoc(docRef)
            
            const data =  {id : dataDb.id , ...dataDb.data()}

           setProduct(data);
        }catch(error){
            console.log(error)
        }
    }


    useEffect(() =>{

        getProduct();

    },[idProduct]) //Cambia cuando cambia el id

    return (
    
        <ItemDetail product={product} />
  )
}

export default ItemDetailContainer
