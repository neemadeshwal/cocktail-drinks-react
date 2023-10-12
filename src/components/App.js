import "../styles.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

///pages

import About from "./about";
import Home from "./home";
import NewsLetter from "./newsletter";
import Navbar from "./Navbar";
import SingleCocktail from "./singleCocktail";
import Error from "./Error";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
