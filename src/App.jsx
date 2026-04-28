import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Clients } from "./pages/Clients";
import { Certificates } from "./pages/Certificates";
import { Testimonials } from "./pages/Testimonials";

// Layout
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/site/footer";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
