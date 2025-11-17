import React, { use } from "react";
import Properties from "../components/Properties/Properties";

const PropertisPromis = fetch("http://localhost:3000/allproperties").then(
  (res) => res.json()
);
const Home = () => {
  return (
    <>
      <h1>I am home</h1>

      <Properties PropertisPromis={PropertisPromis} />
    </>
  );
};

export default Home;
