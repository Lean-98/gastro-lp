import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/ui/navbar/Navbar';
import { HomePage } from './pages/home/HomePage';
import { ContactPage } from './pages/contact/ContactPage';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { Footer } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route index element={<Landing />} /> */}
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
