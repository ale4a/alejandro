import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
