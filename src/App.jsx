import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/home-page";
import { ServicesPage } from "./pages/services-page";
import { AboutPage } from "./pages/about-page";
import { ContactsPage } from "./pages/contacts-page";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";
// import "./styles/index.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
