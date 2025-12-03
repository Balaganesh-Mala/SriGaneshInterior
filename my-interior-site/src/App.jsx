import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./pages/Landing";
import ModularKitchen from "./pages/services/ModularKitchen";
import Wardrobes from "./pages/services/Wardrobes";
import FullHome from "./pages/services/FullHome";
import TvUnits from "./pages/services/TvUnits";
import ProjectPage from "./pages/projects/ProjectPage";
import ProjectDetail from "./pages/projects/ProjectDetail";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* Add upcoming pages here */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/modular-kitchen" element={<ModularKitchen />} />
            <Route path="/wardrobes" element={<Wardrobes />} />
            <Route path="/full-home" element={<FullHome />} />
            <Route path="/tv-units" element={<TvUnits />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
