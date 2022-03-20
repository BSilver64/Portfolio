import "./styles.css";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (

    <BrowserRouter>
     
    <Navigation />
     <Routes>
       <Route exact path="/" element={<Home />}/>
       <Route  path="/About" element={<About />}/>
       <Route  path="/project" element={<Projects />}/>
       <Route  path="/Resume" element={<Resume />}/>
       <Route  path="/Contact" element={<Contact />}/>
     </Routes>
     <Footer />
   </BrowserRouter>
  );
}

export default App;
