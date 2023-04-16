
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ProductDetails from './Components/Product/ProductDetails';
import Products from './Components/Products/Products';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/product/:productId' element={<ProductDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
