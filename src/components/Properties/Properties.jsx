import React, { use } from "react";

const Properties = ({ PropertisPromis }) => {
  const propertiesData = use(PropertisPromis);
  return (
    <div className=" grid grid-cols-4 gap-10 w-11/12 mx-auto">
      {propertiesData.map((data) => (
        <div
          key={data._id}
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition rounded-xl"
        >
          <figure className="relative">
            <img
              src={data.image}
              className="rounded-t-xl h-60 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{data.property_name}</h2>
          
            <p className="text-gray-500">category: {data.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;
