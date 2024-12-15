import "./NavBar.css"
import CartWidget from './CartWidget'
import  {Link, NavLink, useNavigate} from "react-router-dom"
const NavBar = () => {
  
  const navigate = useNavigate()

  
  return (
    <>
      <nav className="navbar">

        {/* <button onClick={ () => navigate (-1)} > ir hacia atras</button> */}

        <Link to="/" className='tituloEmpresa'>
          <img  src="../src/assets/LogoLeon.png"></img>     
          <h1 className="title">Lion Technology</h1>
        </Link>
        <ul className="text-category">
          <NavLink to="/" className={({isActive} )=> isActive ? "category-active" : "category"}>Inicio</NavLink>
          <NavLink to="/category/procesadores" className={ ( {isActive} ) => isActive ? "category-active" : "category"} >Procesadores</NavLink>
          <NavLink to="/category/placa_de_video" className={ ( {isActive} ) => isActive ? "category-active" : "category"}>Placas de Video</NavLink>
          <NavLink to="/category/mouse" className={ ( {isActive} ) => isActive ? "category-active" : "category"}>Mouse</NavLink>
        </ul>
        
        
          <CartWidget />
        
      </nav>
    </>
  )
}

export default NavBar
