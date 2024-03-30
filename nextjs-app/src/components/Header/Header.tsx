import { Button } from "primereact/button";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[60px] md:h-[100px] px-3 md:px-5 flex justify-between items-center">
      <span className="block"></span>
      <h1 className="text-xl sm:text-2xl lg:text-3xl">Marigold</h1>
      <Button
        icon={<span className="pi pi-user"></span>}
        rounded
        className="border-2"
      />
    </div>
  );
};

export default Header;
