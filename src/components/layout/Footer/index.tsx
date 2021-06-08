import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import author from '@config/author-meta.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="py-2 mt-10 border-b-4 border-blue-500">
    <div className="flex container justify-between flex-col lg:flex-row text-center lg:text-left">
      <p className="text-gray-400 text-sm order-10 lg:!order-1">
        © {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
        <Link href="https://github.com/healthpackdev">
          <a target="_blank" className="text-blue-500">
            healthpack
          </a>
        </Link>{' '}
        using{' '}
        <Link href="https://chakra-ui.com">
          <a target="_blank" className="text-blue-700">
            TailwindCSS
          </a>
        </Link>
      </p>
      <div className="flex justify-center">
        {author.socials.map((social, index) => (
          <Link href={social.href} key={index.toString()}>
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
