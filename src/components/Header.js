import React from "react";

const Header = () => {
  return (
    <header className="py-4 md:py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#" className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-700 text-transparent bg-clip-text">
              Avinash
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold ml-2">
              Kumar
            </div>
          </a>
          <button className="btn btn-sm md:btn-md p-2">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
