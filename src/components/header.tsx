import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import Chart from "../../public/images/chart-icon.svg";
import { useGlobalState } from "../context/GlobalStateContext";

const Header = () => {
  const { count } = useGlobalState();

  return (
    <header className="flex justify-between align-center bg-medium-gray border-b-2 border-b-border-gray py-1 lg:px-40 px-4">
      <div className="flex-shrink-0 lg:w-auto">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-10 h-10">
              <Image src={Logo} alt="Dev Store Logo" layout="responsive" />
            </div>
            <p className="text-xl text-magenta">Dev Store</p>
          </div>
        </Link>
      </div>
      <div className="mt-1">
        <Link href="/chart">
          <div className="relative">
            <div className="w-4 h-4 bg-darker-gray rounded-full absolute top-0 -right-1 -mt-1 text-white">
              <p className="text-xs text-white ml-1">{count}</p>
            </div>
            <Image
              src={Chart}
              alt="Shopping Chart Icon"
              width={30}
              height={30}
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
