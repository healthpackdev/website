import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ExtendedLinkProps extends LinkProps {
  href: string;
}

const Link: React.FC<ExtendedLinkProps> = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <ChakraLink {...props}>{children}</ChakraLink>
  </NextLink>
);

export default Link;
