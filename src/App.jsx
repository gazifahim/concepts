import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

const Home = lazy(() => import("./pages/Home"));
const JsConcept = lazy(() => import("./pages/JsConcept"));
const ReactConcepts = lazy(() => import("./pages/ReactConcepts"));
const NextJsConcepts = lazy(() => import("./pages/NextJsConcepts"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/javascript-concepts" element={<JsConcept />} />
          <Route path="/react-concepts" element={<ReactConcepts />} />
          <Route path="/nextjs-concepts" element={<NextJsConcepts />} />

          {/* 404 route MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
