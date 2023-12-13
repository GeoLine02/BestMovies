import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-wrap justify-center h-[80%] items-center">
        <div className=" max-w-4xl flex items-center justify-center text-center">
          <h1 className="text-7xl">
            The best movies from IMDB raiting in full HD quality!
          </h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
