import logo from './logo.svg';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route , Routes , Link , Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
function App() {
  return (
    <div className="App">
    <Navbar />
   
       <BrowserRouter>
          <Routes>
            <Route exact path="/"  element={<Homescreen />}></Route>
            <Route exact path="/cart" element={<Cartscreen />}></Route>
            <Route exact path="/register" element={<Registerscreen />}></Route>
            <Route exact path='/login' element={<Loginscreen />}></Route>
            <Route exact path='/orders' element={<Ordersscreen />}></Route>
            <Route path='/admin/*' element={<Adminscreen />}></Route>
          </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App; 
