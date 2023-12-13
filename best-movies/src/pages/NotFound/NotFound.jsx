import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <div className="h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex justify-center items-center h-[90vh]">
        <h1 className="text-7xl text-center">This Page Does Not Exists! :(</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NotFound;
