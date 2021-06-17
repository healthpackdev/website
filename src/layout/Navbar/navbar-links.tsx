import links from '@config/nav-links.json';
import Link from 'next/link';
import React from 'react';
// import { motion } from 'framer-motion';

const Navigate: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => (
  <nav {...props}>
    <ul className="flex">
      {links.map((link, index) => (
        <li key={index.toString()}>
          <Link href={link.href}>
            <a className="no-link px-4 py-1 rounded select-none text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {link.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigate;
