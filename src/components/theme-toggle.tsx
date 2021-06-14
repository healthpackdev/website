import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const MotionIcon = motion(FontAwesomeIcon);
  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="icon-button"
      aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
      {...props}
      type="button"
    >
      <MotionIcon
        whileHover={{ rotate: '360deg' }}
        icon={isDark ? ['fas', 'moon'] : ['fas', 'sun']}
        className={isDark ? 'text-gray-400' : 'text-yellow-500'}
      />
    </button>
  );
};
export default ThemeToggle;
