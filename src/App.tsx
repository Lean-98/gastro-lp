import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { HomePage } from './pages/home/HomePage';
import { ContactPage } from './pages/contact/ContactPage';
import { CatalogPage } from './pages/catalog/CatalogPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
