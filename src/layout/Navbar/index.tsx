import { useState } from 'react';
import { NavbarMobileToggle, NavbarMobile } from '@layout/Navbar/navbar-mobile';
import NavbarLinks from '@layout/Navbar/navbar-links';
import NavbarGithub from '@layout/Navbar/navbar-github';
import Link from 'next/link';

import ThemeToggle from '@components/theme-toggle';
import pkg from 'package.json';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="lg:mt-16 mt-5 max-w-content">
      <Link href="/">
        <a>
          <h2 className="pl-3 mr-1 text-3xl inline-block font-semibold">Healthpack</h2>
          <span className="font-comic select-none font-bold bg-blue-500 text-white px-1 rounded-md">
            v{pkg.version}
          </span>
        </a>
      </Link>
      <div className="border-b py-2 flex justify-between">
        <div className="flex items-center">
          <NavbarMobileToggle onClick={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />
          <NavbarLinks className="hidden md:block" />
        </div>
        <div className="flex items-center">
          <NavbarGithub />
          <ThemeToggle />
        </div>
      </div>
      {isNavOpen && <NavbarMobile />}
    </header>
  );
};

export default Navbar;
