import { IconButton, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import siteConfig from '@config/site-config.json';

const NavbarGithub: React.FC = () => (
  <Link isExternal href={`https://github.com/${siteConfig.author.github}`}>
    <IconButton
      aria-label="Github Profile"
      variant="ghost"
      colorScheme="gray"
      icon={<FontAwesomeIcon icon={['fab', 'github']} />}
    />
  </Link>
);

export default NavbarGithub;
