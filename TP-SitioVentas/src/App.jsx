import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/marca/:idMarca" element={<Productos />} />
        <Route path="producto/:idCelular" element={<ProductoDetalle />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
