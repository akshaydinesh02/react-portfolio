import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import React, { useContext } from "react";
import { SwitchContext } from "./context";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <NavBar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
