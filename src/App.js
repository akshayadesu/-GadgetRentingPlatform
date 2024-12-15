import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GadgetListing from "./components/GadgetListing";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Signup from './components/Signup';
import SignIn from './components/SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  const handleSignup = () => {
    setIsAuthenticated(true); // Set the user as authenticated after signup
  };

  const handleSignIn = () => {
    setIsAuthenticated(true); // Set the user as authenticated after sign-in
  };

  const handleSignOut = () => {
    setIsAuthenticated(false); // Set the user as not authenticated after sign-out
  };

  return (
    <Router>
      <Navbar 
        isAuthenticated={isAuthenticated} 
        onSignOut={handleSignOut} 
      /> {/* Pass auth state and sign-out function to Navbar */}
      <Routes>
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/" element={
          <>
            <HeroBanner />
            <Features />
            <GadgetListing />
            <ContactUs />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
