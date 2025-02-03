import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <div className="container mx-auto flex justify-center items-center h-16">
        <h1 className="text-3xl font-bold">
          <Link href="/">PokePortal</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
