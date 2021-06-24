/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import author from '@config/author-meta.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-content my-10">
      <div className="flex border-t-2 py-2 justify-between items-center flex-col lg:flex-row text-center lg:text-left">
        <p className="text-gray-700 dark:text-gray-200 text-md order-1 lg:order-[-1] font-header">
          © {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
          <a href="/github" className="link">
            healthpack
          </a>{' '}
          using{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="link">
            TailwindCSS
          </a>
        </p>
        <div className="flex justify-center space-x-4 my-1">
          {author.socials.map((social, index) => (
            <Link href={`/${social.icon[1]}`} key={index.toString()}>
              <a style={{ color: social.color }}>
                <FontAwesomeIcon icon={social.icon as IconProp} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
