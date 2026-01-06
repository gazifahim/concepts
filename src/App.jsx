import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JsConcept from "./pages/JsConcept";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ReactConcepts from "./pages/ReactConcepts";
import NextJsConcepts from "./pages/NextJsConcepts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/javascript-concepts" element={<JsConcept />} />
        <Route path="/react-concepts" element={<ReactConcepts />} />
        <Route path="/nextjs-concepts" element={<NextJsConcepts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
