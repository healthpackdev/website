import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarLinks from 'src/layout/Navbar/navbar-links';

export const NavbarMobile: React.FC = () => <NavbarLinks className="flex justify-center w-full mt-2"  />;

export const NavbarMobileToggle: React.FC<React.HTMLProps<HTMLButtonElement> & { isNavOpen: boolean }> = ({
  isNavOpen,
  ...props
}) => (
  <button {...props} className="icon-button" aria-label="open menu" type="button">
    <FontAwesomeIcon icon={!isNavOpen ? ['fas', 'bars'] : ['fas', 'times']} />
  </button>
);
