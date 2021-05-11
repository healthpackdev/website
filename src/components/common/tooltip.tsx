import { Placement, Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react';

interface ExtendedTooltipProps extends TooltipProps {
  content?: React.ReactNode | string;
  noArrow?: boolean;
  place?: Placement;
}

const Tooltip: React.FC<ExtendedTooltipProps> = ({ content, noArrow, children, place, ...props }) => (
  <ChakraTooltip label={content} hasArrow={noArrow || true} placement={place || 'top'} borderRadius="md" {...props}>
    <span>{children}</span>
  </ChakraTooltip>
);

export default Tooltip;
