import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import OurToursPage from './pages/OurToursPage/OurToursPage';
import TourInfoPage from './pages/TourInfoPage/TourInfoPage';

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
          <Route path='/tour/:tourId' element={<TourInfoPage />} />
         </Routes>
         <Footer />
      </Router>
    
    </>
  );
}

export default App;
