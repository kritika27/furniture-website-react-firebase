import React from "react";
import Footer from "./../Footer/Footer";
import Form from "./../Form/Form";
import Hero from "./../Hero/Hero";
import Services from "./../Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      {/*featured products*/}
      <Services />
      {/*blog*/
      /*image gallery*/}
      <Form />
      <Footer />
    </>
  );
}
