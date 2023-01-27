import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggle from '@components/theme-toggle';

import author from '@config/author-meta.json';

const NavbarGithub: React.FC = () => (
  <div className="flex items-center">
    <a target="_blank" href={`https://github.com/${author.github}`} rel="noreferrer">
      <button aria-label="Github Profile" className="icon-button  transition-colors" type="button">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </button>
    </a>
    <ThemeToggle />
  </div>
);

export default NavbarGithub;
