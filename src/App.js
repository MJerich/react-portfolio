import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header-component';
import Footer from './components/Footer/footer-component';
import About from './components/About/about-component';
import ContactForm from './components/Contact/contact-component';
import Portfolio from './components/Portfolio/protfolio-component';
import Resume from './components/Resume/resume-component';



function App() {

  

  // const [currentTarget, setCurrentTarget] = useState(true);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/react-portfolio' element={<About />} />
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
