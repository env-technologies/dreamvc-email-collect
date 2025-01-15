import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col items-center px-10 py-5 text-white">
      <div className="flex w-full justify-between">
        <Image
          src="/LogoWhite.svg"
          alt="Dream VC Logo"
          width={180}
          height={60}
        />
        <Image src="/a&a.svg" alt="A & A Logo" width={70} height={60} />
      </div>
    </div>
  );
}

export default Navbar;
