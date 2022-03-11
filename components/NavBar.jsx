import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
      <nav className="container mx-auto flex px-10 items-center pt-7 gap-8">
          <Link href="/">Home</Link>
          <Link href="/dev-work">Dev Work</Link>
          <Link href="/design-work">Design Work</Link>
      </nav>
  );
}

export default NavBar