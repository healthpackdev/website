import { ContainerProps, Container as ChakraContainer, Text, GridItem } from '@chakra-ui/react';
import useMotion, { MotionElementProps } from '@hooks/use-motion';
import { VariantLabels, TargetAndTransition } from 'framer-motion';

interface ContainerExtendedProps extends ContainerProps {
  header: string;
}
const Container: React.FC<ContainerExtendedProps> = ({ header, children, ...props }) => (
  <ChakraContainer maxW="container.lg" py="10" as="section" {...props}>
    <Text as="header" fontSize="3xl" textAlign="center" my="7" fontWeight="semibold">
      {header}
    </Text>
    {children}
  </ChakraContainer>
);

export { Container };

interface CardProps extends MotionElementProps {
  hover?: VariantLabels | TargetAndTransition;
}
const MotionGridItem = useMotion(GridItem);
const Card: React.FC<CardProps> = ({ children, hover, ...props }) => (
  <MotionGridItem whileHover={hover} className="card" cursor="pointer" boxShadow="md" borderRadius="md" {...props}>
    {children}
  </MotionGridItem>
);
export { Card };
