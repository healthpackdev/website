import { Box, Img } from '@chakra-ui/react';
import Link from '@components/common/link';
import useMotion from '@hooks/use-motion';

const NavbarImage = () => {
  const MotionImg = useMotion(Img);
  return (
    <Box>
      <Link href="/">
        <MotionImg
          // whileHover={{ rotate: '180deg' }}
          // transition={{ duration: 0.5 }}
          display="inline-block"
          src="/favicons/favicon.ico"
          alt="healthpack's profile"
          draggable={false}
          borderRadius="full"
          boxSize="30px"
          mx="4"
        />
      </Link>
    </Box>
  );
};
export default NavbarImage;
