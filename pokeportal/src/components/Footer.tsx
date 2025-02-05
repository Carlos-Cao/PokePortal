"use client";

import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <a href="https://github.com/Carlos-Cao">
          <p>&copy; {new Date().getFullYear()} Carlos-Cao</p>
        </a>
        <p>
          This is an unofficial fan project and is not affiliated with or
          endorsed by Nintendo, Game Freak, or Creatures.
        </p>
        <button
          onClick={scrollToTop}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-blue-700"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
