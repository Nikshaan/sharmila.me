import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Journal from "./pages/Journal";
import About from "./pages/About";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App