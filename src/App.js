
import './App.css';
import logo from './images/logo.png'
import icon from './images/icon.png'
import leftbar from './images/left-bar.png'
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
     <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><img src={logo} /></a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
           <Link to='/'>Home</Link>
          </li>
          <li className="navbar-item">
           <Link to='/About'>About</Link>
          </li>
          <li className="navbar-item">
          <Link to='/Services'>Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-icon">
         <img src={icon} />
        </div>
      </div>
    </nav>
    <div className='Home'>
      <img src={leftbar} />
    </div>
    <div className='products'>
      <p className='heading'>Hair Products</p>
      <p className='btn'>Sort by popular</p>
    </div>
    <div className='cards'>
      <img src={card1} />
      <img src={card2} />
      <img src={card1} />
    </div>
    <div className='footer1'>
      <img src={logo} />
      <div className='social-icons'>
    <FontAwesomeIcon icon={faSquareInstagram} />
    <FontAwesomeIcon icon={faSquareXTwitter} />
    <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className='details'>
    <FontAwesomeIcon icon={faEnvelope} />
    <FontAwesomeIcon icon={faPhone} />
    <FontAwesomeIcon icon={faLocationDot} />
    </div>
    <div className='details'>
      <p>Groomer.online@gmail.com</p>
      <p>+91  9876543210</p>
      <p>Hi-tech city, Hyderabad</p>
    </div>
    <div className='conditions'> 
      <p>Terms and conditions</p>
      <p>Privacy and Policy</p>
    </div>
    </div>
    <hr/>
    <div className='footer2'>
      <img src={logo} />
      <p>copyright &#169; 2024 GROOMER VOGUE AND BEAUTY PRIVATE LIMITED,All rights reserved</p>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </div>
    
  );
}

export default App;
