import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-gray-100 text-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-4">Rent Gadgets Hassle-Free</h2>
      <p className="text-gray-700 mb-6">
        Explore a wide range of gadgets at affordable prices. Sign up now and start renting today!
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
        Explore Rentals
      </button>
    </section>
  );
};

export default HeroBanner;
