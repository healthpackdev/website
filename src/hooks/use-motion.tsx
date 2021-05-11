import { ComponentWithAs, HTMLChakraProps, As } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

// * this is not a hook
function useMotion(component: ComponentWithAs<any, any>) {
  type Merge<P, T> = Omit<P, keyof T> & T;
  type MotionElementprops = Merge<HTMLChakraProps<As<any>>, HTMLMotionProps<any>>;
  const MotionElement: React.FC<MotionElementprops> = motion(component);
  return MotionElement;
}
export default useMotion;
