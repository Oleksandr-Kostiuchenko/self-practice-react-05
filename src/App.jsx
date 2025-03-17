import { useState } from "react";
import "./App.css";

import clsx from "clsx";

//* Components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import ProductsDetails from "./pages/productDetails/productDetails";
import Mission from "./pages/mission/Mission";
import Team from "./team/Team";

//* Router
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const classBuilder = ({ isActive }) => {
    return clsx("components-link", isActive && "active-accent");
  };

  return (
    <>
      <nav className="navList">
        <NavLink className={classBuilder} to="/">
          Home
        </NavLink>
        <NavLink className={classBuilder} to="/about">
          About
        </NavLink>
        <NavLink className={classBuilder} to="/products">
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;
