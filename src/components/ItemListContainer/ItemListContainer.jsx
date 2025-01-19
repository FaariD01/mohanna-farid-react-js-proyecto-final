/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js"
const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()
  
  const collectionName = collection(db, "products")

  const getProducts = async() => { 

      try{
        const dataDb = await getDocs(collectionName)
        
        const data = dataDb.docs.map((productDb) => {
          
          return {id: productDb.id, ...productDb.data() }
        })
        
        setProducts(data)
      

      }catch(error){
          console.log(error)
      }

  }

  const getProductsByCategory = async() => {
    try{

      const q = query( collectionName , where("category", "==", idCategory) )      
      const dataDb = await getDocs(q)
      
      const data = dataDb.docs.map((productDb) => {
        return {id: productDb.id, ...productDb.data() }
      })
      setProducts(data)
    }catch(error){
    console.log(error)
}
  }

useEffect(() =>{

  if(idCategory){
    getProductsByCategory()
  }else{
    getProducts()
  }
}, [idCategory])

  
      return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )

}
export default ItemListContainer
