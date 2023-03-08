import React from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import SocialNetwork from "./components/sn";
import Newsletter from "./components/newsletter";
import ContactForm from "./components/input"
import Footer from "./components/footer";
  
function App() {
    
  return (
      <>
      <Navbar />
      <Products />
      <SocialNetwork />
      <Newsletter />
      <ContactForm />
      <Footer />
      </>
  );
}
  
export default App;
