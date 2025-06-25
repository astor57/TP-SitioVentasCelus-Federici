import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contacto = () => {
  const [infoForm, setInfoForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    setInfoForm({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h1 className="mb-4">Contacto</h1>
          <p className="lead">
            ¿Tienes alguna pregunta? No dudes en contactarnos.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre" 
                name="nombre"
                value={infoForm.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={infoForm.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input 
                type="tel" 
                className="form-control" 
                id="telefono" 
                name="telefono"
                value={infoForm.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea 
                className="form-control" 
                id="mensaje" 
                rows="4"
                name="mensaje"
                value={infoForm.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>
        
        <div className="col-lg-6">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h2 className="mb-4">Información de contacto</h2>
              
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <FaMapMarkerAlt /> Dirección
                </h5>
                <p className="ms-4">Av. Corrientes 1234, Buenos Aires, Argentina</p>
              </div>
              
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <FaPhone /> Teléfonos
                </h5>
                <p className="ms-4">
                  <a href="tel:+541112345678" className="text-decoration-none">+54 11 1234-5678</a><br />
                  <a href="tel:+541198765432" className="text-decoration-none">+54 11 9876-5432</a>
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <FaEnvelope /> Email
                </h5>
                <p className="ms-4">
                  <a href="mailto:info@techmobile.com" className="text-decoration-none">info@techmobile.com</a>
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <FaClock /> Horarios
                </h5>
                <p className="ms-4">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
              
              <div className="mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895276!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1620000000000!5m2!1ses-419!2sar" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Mapa de ubicación"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;