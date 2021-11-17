import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Converter from './components/Converter';
import Banner from './components/Banner';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <Router >
        <Navbar />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Converter />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/api" element={() => {
            window.location.href = "http://localhost:5000/api/";
            return null;
          }}  />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>

    </div>

  );
}

export default App;
