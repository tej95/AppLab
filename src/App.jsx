
import './App.css';
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx';
import Compose from './pages/Compose.jsx';

import Footer from './components/footer'




function App() {



 
  return (
    <>
    
    <div className=''>
    
    
    
    
   
    <BrowserRouter>
    
   
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/compose" element={<Compose/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
      
      
      
    
    
    
      </div>
    
    </>
  );
}

export default App;
