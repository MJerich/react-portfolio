import './App.css';
import Header from './components/Header/header-component';
import Footer from './components/Footer/footer-component';
import About from './components/About/about-component';
import ContactForm from './components/Contact/contact-component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContactForm></ContactForm>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
