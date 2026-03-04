import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Footer'ı import ettik
import Home from './pages/Home';

// Şimdilik boş bileşenler oluşturalım ki hata almayalım
import HowItWorks from './pages/HowItWorks';
import Membership from './pages/Membership';
import Private from './pages/Private';
import Materials from './pages/Materials';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Sayfa içeriği az olsa bile Footer'ı en alta iter */}
      {/* Navbar her sayfada görüneceği için Routes dışında tutuyoruz */}
      <Navbar /> 
      
      <div className="flex-grow"> {/* Ana içerik alanı */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/private" element={<Private />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>

        <Footer /> {/* Tüm rotaların dışında, en altta */}
      </div>
    </Router>
  );
}

export default App;