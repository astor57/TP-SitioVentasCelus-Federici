import { FaMobileAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <FaMobileAlt size={24} className="text-primary" />
              <h4 className="ms-2 mb-0">MobileMinds</h4>
            </div>
            <p>
              Líderes en venta de smartphones con la mejor calidad y servicio al cliente.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          <div className="col-lg-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 mt-1 text-primary" />
                <span>Av. Tecnología 1234, Buenos Aires</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhone className="me-2 text-primary" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <a>info@mobileminds.com</a>
              </li>
              <li className="d-flex align-items-center">
                <FaClock className="me-2 text-primary" />
                <span>Lun-Vie: 9-18hs | Sáb: 10-14hs</span>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5>Newsletter</h5>
            <p className="">Suscríbete para recibir ofertas exclusivas</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Tu email" 
              />
              <button className="btn btn-primary" type="button">
                Suscribir
              </button>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="text-center">
          <small>
            &copy; {new Date().getFullYear()} MobileMinds - Todos los derechos reservados
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;