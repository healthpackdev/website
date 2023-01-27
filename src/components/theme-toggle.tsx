import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReactiveTheme } from '@lib/theme';
import { useEffect } from 'react';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { setTheme, theme } = useReactiveTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      root.classList.remove('hidden');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="icon-button transition-colors"
      aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
      {...props}
      type="button">
      <FontAwesomeIcon
        icon={isDark ? ['fas', 'moon'] : ['fas', 'sun']}
        className={isDark ? 'text-gray-300' : 'text-yellow-500'}
      />
    </button>
  );
};
export default ThemeToggle;
