import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <Router>
         <Header />
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
         </Routes>
         <Footer />
      </Router>
    
    </>
  );
}

export default App;
