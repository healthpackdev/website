import links from '@config/nav-links.json';
import Link from 'next/link';
import React from 'react';
// import { motion } from 'framer-motion';

const Navigate: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => (
  <nav {...props}>
    <ul>
      {links.map((link, index) => (
        <li key={index.toString()}>
          <Link href={link.href}>
            <a className="px-3 py-1 rounded-md select-none text-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {link.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigate;
