
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ProductDetails from './Components/Product/ProductDetails'; 
import Products from './Components/Products/Products';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import UserOptions from "./Components/UserOptions/UserOptions";
import Cart from './Components/UserOptions/Cart/Cart';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Test from './Components/test/Test';
import Mobiles from './Components/Products/Moiles';
import Laptops from './Components/Products/Laptops';
import Watches from './Components/Products/Watches';
import Accessories from './Components/Products/Accessories';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <UserOptions/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/product/:productId' element={<ProductDetails/>}/>  
      <Route path='/products/mobiles' element={<Mobiles/>}/>
      <Route path='/products/laptops' element={<Laptops/>}/>
      <Route path='/products/watches' element={<Watches/>}/>
      <Route path='/products/accessories' element={<Accessories/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route excat path="/contact" element={<ContactUs/>}/>
      <Route exact path='/about' element={<AboutUs/>}/>
      <Route exact path='/test' element={<Test/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
