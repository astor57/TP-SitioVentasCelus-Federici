const QuienesSomos = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h1 className="mb-4">Quiénes Somos</h1>
            <p className="lead">
              En MobileMinds nos apasiona la tecnología y queremos acercarte los mejores dispositivos al mejor precio.
            </p>
            <p>
              Fundada en 2010, nos hemos convertido en una de las tiendas de celulares más confiables del país, 
              gracias a nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
            <p>
              Nuestro equipo está compuesto por expertos en tecnología que están siempre dispuestos a asesorarte 
              para que encuentres el dispositivo que mejor se adapte a tus necesidades.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://revistabyte.es/wp-content/uploads/2021/05/organiza-el-flujo-de-trabajo-en-el-equipo-del-proyecto-de-ti.jpg" 
              alt="Nuestro equipo" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-4">Nuestra Misión</h2>
            <div className="card bg-light border-0">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "Proporcionar a nuestros clientes acceso a la última tecnología móvil, 
                    ofreciendo productos de calidad, asesoramiento experto y un servicio excepcional, 
                    todo a precios competitivos."
                  </p>
                  <footer className="blockquote-footer mt-2">Fundador de MobileMinds</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuienesSomos;