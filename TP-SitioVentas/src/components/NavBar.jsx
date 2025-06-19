import { Link } from 'react-router-dom';
import { marcas } from '../data/data';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/quienes-somos">Quiénes Somos</Link> | 
    <div>
      Productos ▼
      <ul>
        <li><Link to="/productos">Ver todos</Link></li>
        {marcas.map(marca => (
          <li key={marca.id}>
            {/* <Link to={\`/productos/marca/\${marca.id}\`}>{marca.nombre}</Link> */}
          </li>
        ))}
      </ul>
    </div> | 
    <Link to="/contacto">Contacto</Link>
  </nav>
);

export default Navbar;
