// import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const businessInfo = {
    name: "Erick's Garage",
    phone: "(915) 240-2703",
    phoneLink: "tel:19152402703",
    location: "Serving El Paso and surrounding areas",
  };

  const services = [
    {
      icon: "🔧",
      title: "Diesel & Gas Repairs",
      description:
        "Reliable repair service for diesel and gas vehicles, from diagnostics to common mechanical issues.",
    },
    {
      icon: "🚚",
      title: "Mobile Mechanic Service",
      description:
        "We come to you when your vehicle needs help at home, work, or on the road.",
    },
    {
      icon: "🪝",
      title: "Towing",
      description:
        "Fast towing support when your vehicle cannot safely stay on the road.",
    },
    {
      icon: "⚠️",
      title: "Roadside Assistance",
      description:
        "Emergency help for breakdowns, minor issues, and unexpected roadside problems.",
    },
  ];

  return (
    <>
      <Header onInfo={businessInfo} />
      <Hero onInfo={businessInfo} onServiceInfo={services} />
      <Services onServiceInfo={services} />
      <About onInfo={businessInfo} />
      <Contact onInfo={businessInfo} />
      <Footer onInfo={businessInfo} />
    </>
  );
}

export default App;
