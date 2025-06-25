import { useEffect, useState } from 'react';
import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';

const Home = () => {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    const destacadosData = celulares.sort(() => 0.5 - Math.random()).slice(0, 3);
    setDestacados(destacadosData);
  }, []);

  return (
    <div className="container py-4">
      <section className="my-5">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <div className="row">
          {destacados.map(celular => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      </section>
      
      <section className="my-5 bg-light p-4 rounded">
        <h3 className="text-center mb-3">¿Por qué elegirnos?</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-3">
              <h4>🛡️ Garantía</h4>
              <p>12 meses de garantía en todos nuestros productos</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3">
              <h4>🚚 Envíos</h4>
              <p>Envío gratis en compras superiores a $50.000</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3">
              <h4>💳 Financiación</h4>
              <p>Hasta 12 cuotas sin interés con todas las tarjetas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;