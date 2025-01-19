import { useState, useContext} from "react"
import { data } from "react-router-dom";
import FormCheckout from "./FormCheckout.jsx";
import { CartContext } from "../../context/CartContext.jsx"
import { Timestamp, collection, addDoc} from "firebase/firestore";
import db from "../../db/db.js"
import "./checkout.css"
import { Link } from "react-router-dom";
const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });

    const [orderId, setOrderId] = useState(null)
    const {cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeInput = (event) =>{
      
      setDataForm( { ...dataForm, [ event.target.name] :event.target.value } )
          
      
    }

    const handleSubmitForm = async(event) => {

      event.preventDefault()
      const order = { 

        buyer: {...dataForm},
        products: [...cart],
        total: totalPrice(),
        date: Timestamp.fromDate( new Date())
       }
       await uploadOrder(order)
       await deleteCart()
    }

    const uploadOrder = async(newOrder) => {

      try{

      const ordersRef  = collection( db, "orders" ) //creo la coleccion de ordenes
      const response = await addDoc(ordersRef, newOrder) // aniado la nueva orden a la coleccion
      setOrderId(response.id)
      }catch(error){
        console.log(error)
      }


    }

  return (
    <div className="checkout">

      {

        orderId ? (
          <div>

            <h2>Orden subida correctamente! </h2>
            <h3>Guarde su numero de seguimiento: {orderId}</h3>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
            
          </div>
        ) : (

        <FormCheckout
        dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleSubmitForm={handleSubmitForm}
        />

        )

      }

   </div>
  )
}

export default Checkout
