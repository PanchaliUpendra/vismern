import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Activities from './Components/Activities/Activities';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Academics from './Components/Academics/Academics';
import Admissions from './Components/Admissions/Admissions';
import Error from './Components/Error/Error';
import Faq from './Components/FAQ/Faq';
import Facilities from './Components/Facilities/Facilities';
import Career from './Components/Career/Career';
import Login from './Components/Login/Login';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activities' element={<Activities/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/admissions' element={<Admissions/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/careers' element={<Career/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
