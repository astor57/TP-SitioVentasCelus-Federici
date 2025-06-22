import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>TechMobile</h5>
            <p className="text-white">
              Tu tienda de confianza para los mejores celulares del mercado.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Inicio</a></li>
              <li><a href="/productos" className="text-white">Productos</a></li>
              <li><a href="/contacto" className="text-white">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} TechMobile - Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;