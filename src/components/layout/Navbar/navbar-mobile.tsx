import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarLinks from '@components/layout/Navbar/navbar-links';

export const NavbarMobile: React.FC = () => <NavbarLinks className="flex flex-col w-full" />;
/*
  const [path, setPath] = useState('/');
  useEffect(() => {
    const WindowPath = window.location.hash
      ? window.location.pathname.replace(/\/*$/, '') + window.location.hash
      : window.location.pathname;
    setPath(WindowPath);
  });
*/
export const NavbarMobileToggle: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ ...props }) => (
  <button {...props} className="icon-button" aria-label="open menu" type="button">
    <FontAwesomeIcon icon={['fas', 'bars']} />
  </button>
);
