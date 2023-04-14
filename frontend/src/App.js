
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
