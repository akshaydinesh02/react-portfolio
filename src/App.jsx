import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import React, { useContext } from "react";
import { SwitchContext } from "./context";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      {/* <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="pl" element={<ProductList />} />
      </Routes> */}
      <Intro />
      <NavBar />
      <Toggle />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
