import Navbar from "./Navbar.jsx";
import Routes from "./Routes.jsx";
import WineMap from "./components/WineMap.jsx"
import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes />
    </div>
  );
};

module.exports = App;
