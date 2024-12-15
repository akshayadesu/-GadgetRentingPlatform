import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
