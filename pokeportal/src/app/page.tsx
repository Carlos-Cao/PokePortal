import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
