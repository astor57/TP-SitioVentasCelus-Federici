import { Link } from "react-router-dom";
import './Nav.css';

const NavBar= () =>{
    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
        <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/pages/QuienesSomos" className="nav-link active">Quienes somos</Link>
        </li>
        <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Marcas</Link>
            <ul className="dropdown-menu">
            <li>
                <Link to="/" className="dropdown-item">Marcas</Link>
            </li>
            </ul>
        </li>
        <li className="nav-item">            
            <Link to="/pages/Contacto" className="nav-link">Contacto</Link>
        </li>
        </ul>
      );
    
}
export default NavBar;