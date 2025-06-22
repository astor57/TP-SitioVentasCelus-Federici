import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold">TechMobile</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/" 
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/quienes-somos" 
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link" 
                onClick={toggleDropdown}
              >
                Productos <FaChevronDown className="ms-1" />
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/productos" 
                    onClick={() => {
                      setIsOpen(false);
                      setDropdownOpen(false);
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
                        setIsOpen(false);
                        setDropdownOpen(false);
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
                onClick={() => setIsOpen(false)}
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