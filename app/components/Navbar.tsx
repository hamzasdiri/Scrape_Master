import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex item-center gap-1">
          <Image
            src="assets/icons/logo.svg"
            alt="logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Scrape<span className="text-primary">Master</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
