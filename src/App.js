import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/navbar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Foods from './components/foods/Foods';
import Signup from './components/signup/Signup';
import Create from './components/create/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { useLocation } from 'react-router-dom';
import FoodMenu from './components/navbar/foodmenu'
import Contact from './components/navbar/Contact';
import FAQ from './components/navbar/Faq';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<FoodCatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foodmenu" element={<FoodMenu />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/foods/burger" element={<FoodCatalog category="burger" />} />
        <Route path="/foods/pizza" element={<FoodCatalog category="pizza" />} />
        <Route path="/foods/pasta" element={<FoodCatalog category="pasta" />} />
        <Route path="/foods/gyros" element={<FoodCatalog category="gyros" />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
      {showSidebar && (
        <button onClick={toggleSidebar} className="back-arrow-button">
          &larr; Back
        </button>
      )}
    </div>
  );
}

export default App;
