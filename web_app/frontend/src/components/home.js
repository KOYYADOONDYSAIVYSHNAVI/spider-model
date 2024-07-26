import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, NavLink, Routes, useNavigate, useLocation} from 'react-router-dom';
import './home.css';
import './user_info.js'

function Home() {
    const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/user_info');
  };
  return (
    <div id="home" className="home-container">
      <div className="image-wrapper">
      <h3 className="model-heading">Spider Model</h3>
      <img src="https://falkor8.com/wp-content/uploads/2024/05/download-2-1.png" className="Image-1" alt="img-1" />
      <button className='get-started-button' onClick={handleExploreClick}>Explore</button>
      </div>
    </div>
  );
}


function About() {
 
  return (
    <div id="about" className="about-container">
      <h1 className="about-heading">Introduction to Model</h1>
      <p className="about-paragraph">
      Falkor8's Capability Maturity Model (CMM) tool is an innovative web application designed to evaluate and enhance ESG initiatives within organizations. Users can enter detailed information about their sustainability projects to receive comprehensive CMM scores presented on a radial chart, along with explanations and actionable insights. The tool facilitates benchmarking against industry standards and the Fortune 500 average, supporting organizations in their journey towards sustainability excellence.<br/><br/>
      The CMM tool offers a dual-level user experience, catering to both individual users and corporate analysts. In its basic version, users can assess a single ESG initiative, obtain CMM scores, and export detailed reports in PDF format. The advanced SaaS platform enables corporate users to manage and evaluate multiple ESG initiatives across their organization. It provides in-depth comparisons with other Fortune 500 companies and sector-specific benchmarks. This powerful tool not only helps in assessing the current maturity of ESG initiatives but also identifies areas for improvement, fostering continuous growth and alignment with global sustainability standards.
      
      </p>
    </div>
  );
}

function ESG(){
  return (
    <div id="esg" className="esg-container">
      <div className='esg-content'>
        <div className='esg-image'>
          <img src='https://falkor8.com/wp-content/uploads/2024/05/pitching.jpg' alt="ESG Importance" />

        </div>
      

      <div className='esg-info'>
      <h1 className="esg-heading">Importance of ESG</h1>
      <p className="esg-paragraph">
      The CMM tool offers a dual-level user experience, catering to both individual users and corporate analysts. In its basic version, users can assess a single ESG initiative, obtain CMM scores, and export detailed reports in PDF format. The advanced SaaS platform enables corporate users to manage and evaluate multiple ESG initiatives across their organization. It provides in-depth comparisons with other Fortune 500 companies and sector-specific benchmarks. This powerful tool not only helps in assessing the current maturity of ESG initiatives but also identifies areas for improvement, fostering continuous growth and alignment with global sustainability standards.


      </p>
      </div>
    </div>
    </div>
  );

}
function Benefits(){
  return (
    <div id="benefits" className="benefits-container">
      <h1 className="benefits-heading">Benefits of Our Model</h1>
      <div className="benefits-images">
        <div className="benefit-item">
          <img src="https://falkor8.com/wp-content/uploads/2024/05/pitching.jpg" alt="Benefit 1" className="benefit-image" />
          <div className='benefit-text-container'>
          <p className="benefit-text"> Text for Benefit 1</p>
          <p className='benefit-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
        <div className="benefit-item">
          <img src="https://falkor8.com/wp-content/uploads/2024/05/user-centric.jpg" alt="Benefit 2" className="benefit-image" />
          <div className='benefit-text-container'>
          <p className="benefit-text">Text for Benefit 2</p>
          <p className='benefit-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
        <div className="benefit-item">
          <img src="https://falkor8.com/wp-content/uploads/2024/05/workshop.jpg" alt="Benefit 3" className="benefit-image" />
          <div className='benefit-text-container'>
          <p className="benefit-text">Text for Benefit 3</p>
          <p className='benefit-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
      </div>
     
    </div>
  );

}
const flipCardData = [
  { imgSrc: 'img_avatar1.png', name: 'Example 1', description: 'description 1', note: 'note 1' },
  { imgSrc: 'img_avatar2.png', name: 'Example 2', description: 'description 2', note: 'note 2' },
  { imgSrc: 'img_avatar3.png', name: 'Example 3', description: 'description 3', note: 'note 3' },
  { imgSrc: 'img_avatar4.png', name: 'Example 4 ', description: 'description 4', note: 'note 4' }
];

function Examples() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flipCardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flipCardData.length) % flipCardData.length);
  };

  const visibleCards = [
    flipCardData[currentIndex],
    flipCardData[(currentIndex + 1) % flipCardData.length],
    flipCardData[(currentIndex + 2) % flipCardData.length],
  ];

  return (
    <div id= "examples"className="Examples">
      <h1 className="example-heading">Our Work</h1>
      <div className="flip-card-container">
        <button className="nav-button" onClick={handlePrev}>◀</button>
        {visibleCards.map((card, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={card.imgSrc} alt={card.name} style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h1>{card.name}</h1>
                <p>{card.description}</p>
                <p>{card.note}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="nav-button" onClick={handleNext}>▶</button>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div id = "contact"className="container">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <div className="socialLinks">
        <a href="https://www.instagram.com/falkor_8/" className="socialLink" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61562229784461" className="socialLink" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com/company/falkor8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bp4U15Yy1Q9Khrvc38n8Y9g%3D%3D" className="socialLink" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="contactInfo">
        <p>Chicago, IL 60607</p>
        <p>Email: contact@falkor8.com</p>
        <p>Phone: +1 (773)453-4735</p>
      </div>
      <footer className="footer">
        <p><a href="https://falkor8.com/privacy-policy/" className="footerLink" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="https://falkor8.com/cookies/" className="footerLink" target="_blank" rel="noopener noreferrer">Cookies</a></p>
        <p>&copy; 2024 Falkor8 - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /*const navigate = useNavigate();*/

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    /*navigate(path);*/
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="App-header">
      <div className="nav-container">
        <img src="https://falkor8.com/wp-content/uploads/2024/05/Website-Logos-1.png" className="App-logo" alt="logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={isMenuOpen ? 'open':''}>
          <ul>
            <li>
              <a href="#home" className="nav-link" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => handleNavigation(e, 'about')}>About</a>
            </li>
            <li>
              <a href="#esg" className="nav-link" onClick={(e) => handleNavigation(e, 'esg')}>ESG</a>
            </li>
            <li>
              <a href="#benefits" className="nav-link" onClick={(e) => handleNavigation(e, 'benefits')}>Benefits</a>
            </li>
            <li>
              <a href="#examples" className="nav-link" onClick={(e) => handleNavigation(e, 'examples')}>Examples</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
        }
        function HomePage() {
            return (
                
                    
              <div className='HomePage'>
                <Navigation />
                <div className="App-content">
                  <Home />
                  <About />
                  <ESG />
                  <Benefits />
                  <Examples />
                  <Contact />
                </div>
              </div>
              
            );
          }
          export default HomePage;
