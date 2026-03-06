import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TermsPrivacy from './pages/TermsPrivacy';
import FAQ from './pages/FAQ';

// Sayfalar
import HowItWorks from './pages/HowItWorks';
import Membership from './pages/Membership';
import Private from './pages/Private';
import Materials from './pages/Materials';
import About from './pages/About';

// Blog Bileşenleri
import BlogList from './pages/blog/BlogList';
import BlogDetail from './pages/blog/BlogDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar her sayfada sabit */}
        <Navbar /> 
        
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/private" element={<Private />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/about" element={<About />} />
            
            {/* Blog Rotaları */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/terms-and-privacy" element={<TermsPrivacy />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;