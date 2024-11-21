
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Productdetail from './Pages/Product_detail/Productdetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Loginorregister from './Pages/Login_register/Loginorregister';
import './App.css';
import Productlisting from './Pages/Product_listing/Productlisting';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product_list' element={<Productlisting/>}></Route>
        <Route path="/product_detail" element={<Productdetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login_register" element={<Loginorregister />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
