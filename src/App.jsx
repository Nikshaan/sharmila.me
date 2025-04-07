import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Journal from "./pages/Journal";
import About from "./pages/About";
import Paintings from "./gallery/Paintings";
import Craft from "./gallery/Craft";
import Flora from "./gallery/Flora";
import Post from "./pages/Post";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import PaintingPage from "./pages/PaintingPage";
import { AnimatePresence } from "motion/react";

const App = () => {
  const [loader, upadateLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      upadateLoader(false);
    }, 10000);
  }, []);

  return (
    <>
    <PreLoader loader={loader} />
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/sharmila.me/" element={<Homepage />} />
      <Route path="/sharmila.me/gallery" element={<Gallery />} />
      <Route path="/sharmila.me/journal" element={<Journal />} />
      <Route path="/sharmila.me/about" element={<About />} />
      <Route path="/sharmila.me/gallery/paintings" element={<Paintings />} />
      <Route path="/sharmila.me/gallery/craft" element={<Craft />} />
      <Route path="/sharmila.me/gallery/flora" element={<Flora />} />
      <Route path="/sharmila.me/journal/post/:postId" element={<Post />} />
      <Route path='/sharmila.me/gallery/paintings/:paintingID' element={<PaintingPage />}/>
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default App