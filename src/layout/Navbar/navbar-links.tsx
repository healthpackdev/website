import links from '@config/nav-links.json';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';

const Navigate: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  const { asPath } = useRouter();
  const isActive = (href) => asPath === href;

  return (
    <nav {...props}>
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index.toString()}>
            <Link href={link.href} passHref>
              <a
                className={`${
                  isActive(link.href) ? 'font-bold' : ''
                } font-sans no-link mr-1 px-4 py-2 rounded-md select-none hover:bg-gray-100 dark:hover:bg-gray-900`}
              >
                <FontAwesomeIcon icon={['fas', link.icon] as IconProp} className="mr-2" /> {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
