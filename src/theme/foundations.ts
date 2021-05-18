import { theme } from '@chakra-ui/react';
import site from '@config/site-config.json';

export const fonts = {
  ...theme.fonts,
  body: `${site.font.name}, sans-serif`,
  heading: `${site.font.name}, sans-serif`,
};

export const shadows = {
  ...theme.shadows,
};
