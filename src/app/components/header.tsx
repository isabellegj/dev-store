import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Chart from "../../../public/images/chart-icon.svg";

const Header = ({ count }) => {
  return (
    <header className="py-1 px-10 flex justify-between items-center bg-medium-gray border-b-2 border-b-border-gray lg:px-40">
      <Link href="/">
        <div className="flex justify-center align-center gap-2">
          <Image src={Logo} alt="Dev Store Logo" />
          <p className="mt-2 text-xl text-magenta">Dev Store</p>
        </div>
      </Link>
      <Link href="/chart">
        <div className="w-4 h-4 bg-darker-gray rounded-full absolute text-white ml-5 -mt-1">
          <p className="text-xs text-white ml-1">{count}</p>
        </div>
        <Image src={Chart} alt="Shopping Chart Icon" />
      </Link>
    </header>
  );
};

export default Header;
