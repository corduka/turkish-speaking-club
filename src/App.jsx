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

function App() {
  return (
    <FormProvider>
    <Router>
      <ScrollToTop /> {/* Her sayfa değişiminde burası tetiklenecek */}
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
        <FormModal /> {/* Form artık burada tek merkezde duruyor */}
        <Footer />
      </div>
    </Router>
    </FormProvider>
  );
}

export default App;