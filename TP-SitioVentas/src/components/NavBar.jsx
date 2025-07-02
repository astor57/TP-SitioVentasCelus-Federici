import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import { FaBars, FaTimes, FaChevronDown, FaMobileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [productoAbierto, setProductoAbierto] = useState(false);

  const hamburguesa = () => setAbierto(!abierto);
  const hamburguesaAbierta = () => setProductoAbierto(!productoAbierto);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FaMobileAlt />
          <span className="ms-2">MobileMinds</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-label="Toggle navigation"
        >
          {abierto ? <FaTimes /> : <FaBars />}
        </button>
        
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <NavLink className="nav-link" to="/" onClick={() => setAbierto(false)} end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link" to="/quienes-somos" onClick={() => setAbierto(false)}>
                Quiénes Somos
              </NavLink>
            </li>
            <li className="nav-item dropdown mx-1">
              <button 
                className="nav-link dropdown-toggle btn btn-link d-flex align-items-center" 
                onClick={hamburguesaAbierta}
              >
                Productos <FaChevronDown className="ms-1" size={14} />
              </button>
              <ul className={`dropdown-menu ${productoAbierto ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/productos" 
                    onClick={() => {
                      setAbierto(false);
                      setProductoAbierto(false);
                    }}
                  >
                    Ver todos
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                {marcas.map(marca => (
                  <li key={marca.id}>
                    <Link className="dropdown-item" to={`/productos/marca/${marca.id}`}
                      onClick={() => {
                        setAbierto(false);
                        setProductoAbierto(false);
                      }}
                    >
                      {marca.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link" to="/contacto" 
                onClick={() => setAbierto(false)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;