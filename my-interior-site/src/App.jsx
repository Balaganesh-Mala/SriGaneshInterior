import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./pages/Landing";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
