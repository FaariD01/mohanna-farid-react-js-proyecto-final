import "./NavBar.css"
import CartWidget from './CartWidget'
import  {Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
      <navbar>
        <Link to="/" className='tituloEmpresa'>
          <img  src="../src/assets/LogoLeon.png"></img>     
          <h1>Lion Technology</h1>
        </Link>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/category/remera">Remeras</Link>
          <Link to="/category/pantalon">Pantalones</Link>
          <Link to="/category/zapatilla">Zapatillas</Link>
        </ul>
        
        
          <CartWidget />
        
      </navbar>
    </>
  )
}

export default NavBar
