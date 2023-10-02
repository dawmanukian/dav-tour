import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import OurToursPage from './pages/OurToursPage/OurToursPage';

function App() {
  return (
    <>
      <Router>
         <Header />
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/tours' element={<OurToursPage />} />
         </Routes>
         <Footer />
      </Router>
    
    </>
  );
}

export default App;
