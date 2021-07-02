import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ThemeToggle: React.FC = ({ ...props }) => {
  const [themeState, setThemeState] = useState(null);

  const isDark = themeState === 'dark';

  useEffect(() => {
    const html = document.documentElement;

    const theme = localStorage.getItem('theme') || 'light';
    if (theme) html.classList.remove('hidden');

    if (theme === 'light') {
      html.classList.remove('dark');
    } else {
      html.classList.remove('light');
    }
    html.classList.add(theme);
    html.style['color-scheme'] = theme;
    setThemeState(theme);
  }, [themeState]);

  const toggleTheme = () => {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setThemeState(isDark ? 'light' : 'dark');
  };

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
