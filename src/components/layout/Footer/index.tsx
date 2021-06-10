import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import author from '@config/author-meta.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="mt-10 border-b-4 border-blue-500">
    <div className="flex container justify-between items-center flex-col lg:flex-row text-center lg:text-left">
      <p className="text-gray-400 text-sm order-1 lg:order-[-1]">
        © {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
        <a href="/github" target="_blank" rel="noreferrer" className="text-blue-500">
          healthpack
        </a>{' '}
        using{' '}
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-blue-700">
          TailwindCSS
        </a>
      </p>
      <div className="flex justify-center">
        {author.socials.map((social, index) => (
          <Link href={`/${social.icon[1]}`} key={index.toString()}>
            <a className="mx-2 my-3" style={{ color: social.color }}>
              <FontAwesomeIcon icon={social.icon as IconProp} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
