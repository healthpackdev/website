import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="icon-button"
      aria-label={`Toggle ${theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      {...props}
      type="button"
    >
      <MotionIcon
        whileHover={{ rotate: '360deg' }}
        icon={theme === 'dark' || resolvedTheme === 'dark' ? ['fas', 'moon'] : ['fas', 'sun']}
      />
    </button>
  );
};
export default ThemeToggle;
