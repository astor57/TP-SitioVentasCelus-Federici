import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/MainLayout";
import Home from "./pages/Home";
import ProductoDetalle from "./pages/ProductoDetalle";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="persona/:id" element={<ProductoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="estadisticas" element={<QuienesSomos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
