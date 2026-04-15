import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FormProvider } from './context/FormContext';
import FormModal from './components/FormModal'; 
import ScrollToTop from './components/ScrollToTop';

// Sayfalar
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Membership from './pages/Membership';
import Private from './pages/Private';
import Materials from './pages/Materials';
import About from './pages/About';
import NotFound from './pages/NotFound';
import TermsPrivacy from './pages/TermsPrivacy';
import FAQ from './pages/FAQ';

// Blog Bileşenleri
import BlogList from './pages/blog/BlogList';
import BlogDetail from './pages/blog/BlogDetail';

// Lab Apps
import LogicLab from './pages/lab/LogicLab';
import SentenceBuilder from './pages/lab/SentenceBuilder';

function App() {
  return (
    <FormProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar /> 
          
          <main className="flex-grow"> 
            <Routes>
              {/* Ana Sayfalar */}
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/private" element={<Private />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms-and-privacy" element={<TermsPrivacy />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Blog Rotaları */}
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />

              {/* Logic Lab Araçları - ARTIK NOTFOUND ÜSTÜNDE */}
              <Route path="/logic-lab" element={<LogicLab />} />
              <Route path="/logic-lab/sentence-builder" element={<SentenceBuilder />} />

              {/* NOT FOUND - HER ZAMAN EN ALTTA OLMALI */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <FormModal />
          <Footer />
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;