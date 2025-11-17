import React from "react";
import { useLoaderData } from "react-router";

const AllProperties = () => {
  const propertiesData = useLoaderData();
  console.log(propertiesData);

  return (
    <div>
      <h1>i am perties</h1>
    </div>
  );
};

export default AllProperties;
