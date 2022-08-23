
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Projects from './Projects';
import CookieConsent from 'react-cookie-consent';
import Achitecture from './Achitecture';
import EngineeringAndConstruction from './EngineeringAndConstruction';
import GeneralSupplies from './GeneralSupplies';
import RealEstate from './RealEstate';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
       <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/achitecture" element={<Achitecture/>}/>
          <Route exact path="/engineeringandconstruction" element={<EngineeringAndConstruction/>}/>
          <Route exact path="generalsupplies" element={<GeneralSupplies/>}/>
          <Route exact path="realestate" element={<RealEstate/>}/>
          <Route exact path="login" element={<Login/>}/>
          
       </Routes>
       <Footer/>
    </Router>
    <CookieConsent debug={true}
      location="bottom"
      background="white"
      >We may use cookies or any other tracking technologies when you visit our website, including any other media form, mobile website, or mobile application related or connected to help customize the Site and improve your experience.</CookieConsent>
    </div>
  );
}

export default App;
