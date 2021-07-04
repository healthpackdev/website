import { useState } from 'react';
import { NavbarMobileToggle, NavbarMobile } from '@layout/Navbar/navbar-mobile';
import NavbarLinks from '@layout/Navbar/navbar-links';
import NavbarGithub from '@layout/Navbar/navbar-github';
import Link from 'next/link';
import author from '@config/author-meta.json';

import ThemeToggle from '@components/theme-toggle';
import useSWR from 'swr';

const fetchDiscordUserStatus = (...args) => {
  return fetch(`https://api.lanyard.rest/v1/users/${args}`).then((res) => res.json());
};

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data } = useSWR(author.discordId, fetchDiscordUserStatus);
  const status = data?.data.discord_status;
  const statusColor = `status-${status}`;

  return (
    <header className="lg:mt-16 mt-5 max-w-content">
      <span className="inline-flex items-center">
        <Link href="/">
          <a>
            <h2 className="pl-3 mr-1 text-3xl inline-block font-semibold">Healthpack</h2>{' '}
          </a>
        </Link>
        <Link href="/discord">
          <a>
            <span className={`font-comic font-bold text-white px-2 rounded-md ${statusColor}`}>{status}</span>
          </a>
        </Link>
      </span>

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
