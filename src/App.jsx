import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Checkout from './components/Checkout/Checkout'
function App() {
  

  return (
    <div>

    <BrowserRouter> 
      <CartProvider> 
      <NavBar />  {/*No va dentro de Routes porque queda fijo, con el footer pasa lo mismo*/}
        <Routes> 
          <Route path='/' element={<ItemListContainer/>}/> 
          <Route path="/category/:idCategory" element={<ItemListContainer mensaje="Hola! Soy el ItemListContainer"/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}></Route>


          <Route path="*" element={<div> Error 404 - Pagina no encontrada</div>} />
          
        </Routes>
        
      </CartProvider>
     
    </BrowserRouter>
      

    </div>
  )
}

export default App
