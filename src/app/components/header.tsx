import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Chart from "../../../public/images/chart-icon.svg";

const Header = () => {
  return (
    <header className="py-1 px-40 flex justify-between items-center bg-medium-gray border-b-2 border-b-border-gray">
      <div className="flex justify-center align-center gap-2">
        <Image src={Logo} alt="Dev Store Logo" />
        <p className="mt-2 text-xl text-magenta">Dev Store</p>
      </div>
      <Link href="/chart">
        <Image src={Chart} alt="Shopping Chart Icon" />
      </Link>
    </header>
  );
};

export default Header;
