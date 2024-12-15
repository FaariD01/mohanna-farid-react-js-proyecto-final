import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <div>

    <BrowserRouter> 

      <NavBar />  {/*No va dentro de Routes porque queda fijo, con el footer pasa lo mismo*/}
      <Routes> 
      <Route path='/' element={<ItemListContainer/>}/> 
      <Route path="/category/:idCategory" element={<ItemListContainer mensaje="Hola! Soy el ItemListContainer"/>} />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      


      <Route path="*" element={<div> Error 404 - Pagina no encontrada</div>} />
      </Routes>
    </BrowserRouter>
      

    </div>
  )
}

export default App
