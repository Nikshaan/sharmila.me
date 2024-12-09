import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Journal from "./pages/Journal";
import About from "./pages/About";

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/sharmila.me/" element={<Homepage />} />
      <Route path="/sharmila.me/gallery" element={<Gallery />} />
      <Route path="/sharmila.me/journal" element={<Journal />} />
      <Route path="/sharmila.me/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App