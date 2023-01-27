import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

import links from '@config/nav-links.json';

export const Links: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className }) => {
  const { asPath } = useRouter();
  const isActive = (href) => asPath === href;

  return (
    <nav>
      <ul className={className ? className : `hidden md:flex`}>
        {links.map((link, index) => (
          <li key={index.toString()}>
            <Link
              href={link.href}
              className={`${
                isActive(link.href) ? 'font-bold' : ''
              } font-sans mr-1 px-4 py-2 rounded-md select-none border border-none hover:bg-hover transition-colors`}
              passHref>
              <FontAwesomeIcon icon={['fas', link.icon] as IconProp} className="mr-2" /> {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export const NavbarLeftItems: React.FC<{ isNavOpen: boolean; onClick: any }> = ({ isNavOpen, onClick }) => (
  <div className="flex items-center">
    <button onClick={onClick} className="icon-button inline-block md:hidden" aria-label="open menu" type="button">
      <FontAwesomeIcon icon={!isNavOpen ? ['fas', 'bars'] : ['fas', 'times']} />
    </button>
    <Links />
  </div>
);
