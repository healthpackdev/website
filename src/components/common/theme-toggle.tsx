import { IconButton, useColorMode } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle: React.FC = ({ ...props }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const mode = colorMode === 'light';
  return (
    <IconButton
      onClick={toggleColorMode}
      size="md"
      aria-label={`Toggle ${mode ? 'dark' : 'light'} mode`}
      borderRadius="lg"
      variant="ghost"
      colorScheme="gray"
      {...props}
      icon={<FontAwesomeIcon icon={mode ? ['fas', 'moon'] : ['fas', 'sun']} />}
    />
  );
};
export default ThemeToggle;
