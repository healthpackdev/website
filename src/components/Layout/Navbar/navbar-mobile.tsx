import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarLinks from '@components/Layout/Navbar/navbar-links';

export const NavbarMobile: React.FC = () => <NavbarLinks className="flex justify-center w-full" />;
/*
  const [path, setPath] = useState('/');
  useEffect(() => {
    const WindowPath = window.location.hash
      ? window.location.pathname.replace(/\/*$/, '') + window.location.hash
      : window.location.pathname;
    setPath(WindowPath);
  });
*/
export const NavbarMobileToggle: React.FC<React.HTMLProps<HTMLButtonElement> & { isNavOpen: boolean }> = ({
  isNavOpen,
  ...props
}) => (
  <button {...props} className="icon-button" aria-label="open menu" type="button">
    <FontAwesomeIcon icon={!isNavOpen ? ['fas', 'bars'] : ['fas', 'times']} />
  </button>
);
