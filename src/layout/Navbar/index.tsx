import { useMedia } from 'react-use';
import { useState } from 'react';
import { NavbarMobileToggle, NavbarMobile } from '@layout/Navbar/navbar-mobile';
import NavbarLinks from '@layout/Navbar/navbar-links';
import NavbarGithub from '@layout/Navbar/navbar-github';

import ThemeToggle from '@components/theme-toggle';
import pkg from 'package.json';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const isSmall = useMedia('(max-width: 500px)');
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="lg:mt-16 mt-5 max-w-content">
      <div>
        <h2 className="pl-3 mr-1 text-3xl inline-block font-semibold">Healthpack</h2>
        <motion.span
          whileHover={{ rotate: '5deg' }}
          className="font-comic select-none font-bold bg-blue-500 text-white px-1 rounded-md"
        >
          v{pkg.version}
        </motion.span>
      </div>
      <div className="border-b py-2 flex justify-between">
        <div className="flex items-center">
          {isSmall && <NavbarMobileToggle onClick={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />}
          {!isSmall && <NavbarLinks />}
        </div>
        <div className="flex items-center">
          <NavbarGithub />
          <ThemeToggle />
        </div>
      </div>
      {isSmall && isNavOpen && <NavbarMobile />}
    </header>
  );
};

export default Navbar;
