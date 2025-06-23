import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
     <header> 
      <nav>
        <ul>
          <li><Link to="/"> Inicio</Link></li>
          <li><Link to="/admin">Panel de Administrador</Link></li>
          <li><Link to="/registro">Registro</Link> </li>
          <li><Link to="/login">Login</Link></li>
          </ul>
      </nav>
    </header>
    )
}

export default Header