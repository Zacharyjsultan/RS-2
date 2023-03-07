import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Biofield from "./components/Biofield";
import Contact from "./components/Contact";
import About from "./components/About";
import Appointments from "./components/Appointments";
import Navbar from "./components/Navbar";
import Holistic from "./components/Holistic";
import Pricing from "./components/Pricing";
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
        <Route path="/holistic" element={<Holistic />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
