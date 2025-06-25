import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [productosAbierto, setProductosAbierto] = useState(false);

  const hamburguesa = () => setAbierto(!abierto);
  const hamburguesaAbierta = () => setProductosAbierto(!productosAbierto);

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold">TechMobile</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={hamburguesa}
        >
          {abierto ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`collapse navbar-collapse ${abierto ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/" 
                onClick={() => setAbierto(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/quienes-somos" 
                onClick={() => setAbierto(false)}
              >
                Quiénes Somos
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link" 
                onClick={hamburguesaAbierta}
              >
                Productos
              </button>
              <ul className={`dropdown-menu ${productosAbierto ? 'show' : ''}`}>
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/productos" 
                    onClick={() => {
                      setAbierto(false);
                      setProductosAbierto(false);
                    }}
                  >
                    Ver todos
                  </Link>
                </li>
                {marcas.map(marca => (
                  <li key={marca.id}>
                    <Link 
                      className="dropdown-item" 
                      to={`/productos/marca/${marca.id}`}
                      onClick={() => {
                        setAbierto(false);
                        setProductosAbierto(false);
                      }}
                    >
                      {marca.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contacto" 
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