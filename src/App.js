import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
function App() {
  return (
    <Router>
    <Header />
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path='/login' element={ <Login /> } />
    <Route path='/checkout' element = {<Checkout /> }/>
     </Routes>
    </div>
    </Router>
  ); 
}

export default App;
 