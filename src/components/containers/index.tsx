/* eslint-disable import/prefer-default-export */

import { ContainerProps, Container as ChakraContainer, Text } from '@chakra-ui/react';

interface ContainerExtendedProps extends ContainerProps {
  header: string;
}
const Container: React.FC<ContainerExtendedProps> = ({ header, children, ...props }) => (
  <ChakraContainer maxW="container.lg" py="6" as="section" {...props}>
    <Text as="header" fontSize="3xl" textAlign="center" py="2" fontWeight="semibold">
      {header}
    </Text>
    {children}
  </ChakraContainer>
);

export { Container };
