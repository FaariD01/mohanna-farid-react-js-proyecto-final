import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()
    
  

  useEffect(() => {
      getProducts()
        .then((data)=>{
          if(idCategory){
            //Filtrar data por ese valor
            const filterProducts = data.filter((product) => product.category === idCategory)
            setProducts(filterProducts)
          }else{ 
            //Guardar toda la lista de los productos
            setProducts(data);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log("Termino la promesa")
        }) 
      },
  [idCategory])

  
      return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )

}
export default ItemListContainer
