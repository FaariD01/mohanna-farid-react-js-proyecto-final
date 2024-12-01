import "./NavBar.css"
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <>
      <navbar>
        <div id='tituloEmpresa'>
          <img  src="../src/assets/LogoLeon.png"></img>     
          <h1>Lion Technology</h1>
        </div>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        
        
          <CartWidget />
        
      </navbar>
    </>
  )
}

export default NavBar
