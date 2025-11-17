import React from "react";

const AddProperties = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const propertyName = form.propertyname.value;
    const location = form.location.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;
    const newBody = {
      property_name: propertyName,
      description: description,
      category: category,
      price: price,
      location: location,
      image: image,
    };

    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBody),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="max-w-xl mx-auto p-6 bg-base-200 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-5">Add New Property</h2>

        <form onSubmit={handelSubmit} className="space-y-4">
          {/* Property Name */}
          <div className="form-control">
            <label className="label">Property Name</label>
            <input
              type="text"
              placeholder="Enter property name"
              className="input input-bordered"
              name="propertyname"
            />
          </div>
          {/* Category */}
          <div className="form-control">
            <label className="label">Category</label>
            <input
              type="text"
              className="file-input file-input-bordered"
              name="category"
            />
          </div>
          {/* Price */}
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="input input-bordered"
              name="price"
            />
          </div>
          {/* Location */}
          <div className="form-control">
            <label className="label">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="input input-bordered"
              name="location"
            />
          </div>
          {/* Description */}
          <div className="form-control">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write details"
              name="description"
            ></textarea>
          </div>
          {/* Image Upload */}
          <div className="form-control">
            <label className="label">Image</label>
            <input
              type="text"
              className="file-input file-input-bordered"
              name="image"
            />
          </div>
          <button className="btn btn-primary w-full mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
