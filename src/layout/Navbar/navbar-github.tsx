import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import author from '@config/author-meta.json';

const NavbarGithub: React.FC = () => (
  <a target="_blank" href={`https://github.com/${author.github}`} rel="noreferrer" className="no-link">
    <button aria-label="Github Profile" className="icon-button" type="button">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </button>
  </a>
);

export default NavbarGithub;
