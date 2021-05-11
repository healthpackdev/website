import { theme } from '@chakra-ui/react';
import site from '@config/site-config.json';

export const fonts = {
  ...theme.fonts,
  body: `${site.font.name}, sans-serif`,
  heading: `${site.font.name}, sans-serif`,
};

theme.shadows.outline = `0 0 1px 2.5px ${theme.colors.linkedin[500]}`;
export const shadows = {
  ...theme.shadows,
};
