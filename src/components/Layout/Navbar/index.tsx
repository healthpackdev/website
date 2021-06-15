import { useMedia } from 'react-use';
import { useState } from 'react';
import { NavbarMobileToggle, NavbarMobile } from '@components/Layout/Navbar/navbar-mobile';
import NavbarImage from '@components/Layout/Navbar/navbar-image';
import NavbarLinks from '@components/Layout/Navbar/navbar-links';
import NavbarGithub from '@components/Layout/Navbar/navbar-github';

import ThemeToggle from '@components/theme-toggle';

const Navbar: React.FC = () => {
  const isSmall = useMedia('(max-width: 500px)');
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="border-t-8 border-blue-400 dark:border-blue-800 py-2 sticky">
      <div className="content flex justify-between">
        <div className="flex items-center">
          {isSmall && <NavbarMobileToggle onClick={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />}
          <NavbarImage />
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
