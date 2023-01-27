import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { getColor, useReactiveTheme } from '@lib/theme';
import Link from 'next/link';

import author from '@config/author-meta.json';

const Footer: React.FC = () => {
  const { theme } = useReactiveTheme();

  return (
    <footer className="max-w-content my-10">
      <div className="flex border-t py-2 justify-between items-center flex-col lg:flex-row text-center lg:text-left">
        <p className="text-secondary text-md order-1 lg:order-[-1]">
          Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
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
            <Link href={`/${social.icon}`} key={index.toString()} style={{ color: getColor(social.color, theme) }}>
              <FontAwesomeIcon icon={['fab', social.icon as IconName]} />
              <span className="hidden">{social.icon}</span> {/* Links do not have a discernible name */}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
