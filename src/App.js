import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationContainer from './components/navigation-container';
import Home from "./pages/home";  
import About from "./pages/about-contact";
import Porfolio from "./pages/skills-projects";
import Footer from "./components/footer";
import NoMatch from "./pages/no-match";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../src/css/main.css"; 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once:true
    });
  }, []);
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <NavigationContainer />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path ="/about-me" element={<About />} />
            <Route path ="/portfolio" element={<Porfolio />} />
            {/* <Route path ="/portofio/projects" element={<GitHubRepos />} /> */}
            <Route path ="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
