import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('hidden');
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="icon-button"
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
