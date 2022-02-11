
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './Projects';
import CookieConsent from 'react-cookie-consent';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
       <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/product" element={<Products/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          
       </Routes>
       <Footer/>
    </Router>
      <CookieConsent debug={true}
      location="bottom"
      className="bg-red-800 text-white "
      >This site Uses Cookies</CookieConsent>
    </div>
  );
}

export default App;
