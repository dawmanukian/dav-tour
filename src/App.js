import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
         <Header />
         <Routes>
          <Route path='/' element={<HomePage />} />
         </Routes>
         <Footer />
      </Router>
    
    </>
  );
}

export default App;
