import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "./context";
import { Routes, Route } from "react-router-dom";

const App = React.forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="pl" element={<ProductList />} />
      </Routes>
      <Toggle />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
});

export default App;
