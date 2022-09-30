import react from 'react';
import './App.css';
import Roulette from './roulette/Roulette';
import Coupon from './Coupon';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './home/Home';


function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/roulette" element={ <Roulette />} />
          <Route path="/coupon" element={ <Coupon />} />
        </Routes>
      </header>
      <Footer />
    </>
  );
}

export default App;
