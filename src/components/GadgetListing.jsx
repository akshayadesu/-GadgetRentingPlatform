import React from "react";

const GadgetListing = () => {
  const gadgets = [
    { name: "Laptop", price: "$20/day" },
    { name: "Camera", price: "$15/day" },
    { name: "Gaming Console", price: "$25/day" },
  ];

  return (
    <section id="gadgets" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Available Gadgets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgets.map((gadget, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-bold">{gadget.name}</h3>
            <p className="text-gray-700">{gadget.price}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GadgetListing;
