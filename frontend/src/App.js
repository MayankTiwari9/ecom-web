
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ProductDetails from './Components/Product/ProductDetails';
import Products from './Components/Products/Products';
import MensClothing from './Components/Products/MensClothing';
import WomensClothing from './Components/Products/WomensClothing';
import Jewelery from './Components/Products/Jewelery';
import Electronics from './Components/Products/Electronics';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import UserOptions from "./Components/UserOptions/UserOptions";
import Cart from './Components/UserOptions/Cart/Cart';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <UserOptions/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/product/:productId' element={<ProductDetails/>}/>
      <Route path='/products/mens' element={<MensClothing/>}/>
      <Route path='/products/womens' element={<WomensClothing/>}/>
      <Route path='/products/jewelery' element={<Jewelery/>}/>
      <Route path='/products/electronics' element={<Electronics/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
