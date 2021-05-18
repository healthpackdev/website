import { ComponentWithAs, HTMLChakraProps, As } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionElementProps = Merge<HTMLChakraProps<As>, HTMLMotionProps<any>>;

function useMotion(component: ComponentWithAs<any, any>) {
  const MotionElement: React.FC<MotionElementProps> = motion(component);
  return MotionElement;
}
export default useMotion;
