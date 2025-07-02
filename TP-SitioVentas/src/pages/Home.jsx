import { useEffect, useState } from 'react';
import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';
import MarcasDestacadas from '../components/MarcasDestacadas';

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
                <MarcasDestacadas />
        </div>
      </section>
    </div>
  );
};

export default Home;