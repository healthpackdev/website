import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="icon-button"
      aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
      {...props}
      type="button"
    >
      <FontAwesomeIcon
        icon={isDark ? ['fas', 'moon'] : ['fas', 'sun']}
        className={isDark ? 'text-gray-300' : 'text-yellow-500'}
      />
    </button>
  );
};
export default ThemeToggle;
