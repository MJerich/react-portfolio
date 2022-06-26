import React, { useState } from 'react';
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
      <About />
      <Portfolio />
      <Resume />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
