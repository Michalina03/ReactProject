import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./scss/main.css";

import Home from "./components/Home";
import Mobs from "./components/Mobs";
import Items from "./components/Items";
import Blocks from "./components/Blocks";
import Game from "./components/Game";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/mobs">Mob</Link>
        </li>
        <li>
          <Link to="/items">Item</Link>
        </li>
        <li>
          <Link to="/blocks">Block</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mobs" element={<Mobs />} />
        <Route path="/items" element={<Items />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
