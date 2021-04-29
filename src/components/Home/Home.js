import React from "react";
import Footer from "./../Footer/Footer";
import Form from "./../Form/Form";
import Featured from "../../components/Featured/Featured";
import Services from "./../Services/Services";
import Temp from "../Temp";

export default function Home() {
  return (
    <>
      <Temp />

      <Featured />
      <Services />

      <Form />

      <Footer />
    </>
  );
}
