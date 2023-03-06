import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Biofield from "./components/Biofield";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";
import Appointments from "./components/Appointments";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/biofield" element={<Biofield />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
