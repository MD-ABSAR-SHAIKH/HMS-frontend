import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero
        title="Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider!"
        imageUrl="/hero.png"
      />
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 py-2 md:py-6">
        <Biography imageUrl="/about.png" />
        <Departments />
        <MessageForm />
      </div>
    </div>
  );
};

export default Home;