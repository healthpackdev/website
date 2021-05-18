import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function error() {
  return (
    <Box>
      404 | Page Not found
      <FontAwesomeIcon icon={['fas', 'arrow-left']} /> Go to Home
    </Box>
  );
}
