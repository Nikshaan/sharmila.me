import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Journal from "./pages/Journal";
import About from "./pages/About";
import Paintings from "./gallery/Paintings";
import Craft from "./gallery/Craft";
import Flora from "./gallery/Flora";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/sharmila.me/" element={<Homepage />} />
      <Route path="/sharmila.me/gallery" element={<Gallery />} />
      <Route path="/sharmila.me/journal" element={<Journal />} />
      <Route path="/sharmila.me/about" element={<About />} />
      <Route path="/sharmila.me/gallery/paintings" element={<Paintings />} />
      <Route path="/sharmila.me/gallery/craft" element={<Craft />} />
      <Route path="/sharmila.me/gallery/flora" element={<Flora />} />
    </Routes>
    </>
  )
}

export default App