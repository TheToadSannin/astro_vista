import React from "react";
import earth from "../assets/earth_map.jpg";

const Home = () => {
  return (
    <main className="home">
      <div id="venus"></div>
      <div id="earth"></div>
      <div id="mars"></div>
      <div id="jupiter"></div>
      <div id="saturn">
        <div className="planet"></div>
        <div className="rings"></div>
      </div>
      <div id="uranus"></div>
      <div id="neptune"></div>
    </main>
  );
};

export default Home;
