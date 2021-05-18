import Link from '@components/common/link';
import { Text, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { css, Global } from '@emotion/react';

function blog() {
  return (
    <>
      <Box>
        <Text textAlign="center" fontSize="3xl" display="block">
          This page is work in progress.
        </Text>
        <Link href="/" textAlign="center" _hover={{ color: 'blue.500' }} display="block">
          <FontAwesomeIcon icon={faArrowLeft} /> Go to Home
        </Link>
      </Box>

      <Global
        styles={css`
          body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      />
    </>
  );
}
export default blog;
