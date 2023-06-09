import React from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
