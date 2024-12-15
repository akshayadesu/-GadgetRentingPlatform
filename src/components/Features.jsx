import React from "react";

const Features = () => {
  const features = [
    { title: "Wide Variety of Gadgets", icon: "📱" },
    { title: "Affordable Pricing", icon: "💸" },
    { title: "Quick Delivery", icon: "🚚" },
  ];

  return (
    <section id="features" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose QuickRent?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg text-center w-64 shadow-lg"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
