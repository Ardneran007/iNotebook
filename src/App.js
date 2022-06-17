import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
 