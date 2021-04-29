import React from "react";
import Footer from "./../Footer/Footer";
import Form from "./../Form/Form";
import Featured from "../../components/Featured/Featured";
import Services from "./../Services/Services";
import Hero from "../../components/Hero/Hero";

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
