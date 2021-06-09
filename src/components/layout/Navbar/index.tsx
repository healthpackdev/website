import { useMedia } from 'react-use';
import { useState } from 'react';
import { NavbarMobileToggle, NavbarMobile } from '@components/layout/Navbar/navbar-mobile';
import NavbarImage from '@components/layout/Navbar/navbar-image';
import NavbarLinks from '@components/layout/Navbar/navbar-links';
import NavbarGithub from '@components/layout/Navbar/navbar-github';

import ThemeToggle from '@components/common/theme-toggle';

const Navbar: React.FC = () => {
  const isSmall = useMedia('(max-width: 500px)');
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-700 shadow-lg p-2">
      <div className="flex container items-center justify-between">
        <div className="flex items-center">
          {isSmall && <NavbarMobileToggle onClick={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />}
          <NavbarImage />
          {!isSmall && <NavbarLinks />}
        </div>
        <div className="flex items-center px-2">
          <NavbarGithub />
          <ThemeToggle />
        </div>
      </div>
      {isSmall && isNavOpen && <NavbarMobile />}
    </header>
  );
};

export default Navbar;
