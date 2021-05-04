import React from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Blog/Blog";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Services />
      <Form />
      <Footer />
    </>
  );
}
