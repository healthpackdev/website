import React from 'react';
import colorMap from '@config/site-color-map.json';
import { useColorModeValue } from '@chakra-ui/react';

type Colors = [string, [string, string]];
interface ColorsObject {
  cardBg: string;
  mutedText: string;
  hero: {
    headerJob: string;
  };
  header: {
    linkHoverBg: string;
  };
}
/**
 * @deprecated this system has been depreceted it will removed future versions.
 * @reason I think this system good work color mangement but I searching a better way.
 */
function useColorMap(page: string) {
  const parsedMap = {};

  Object.entries(colorMap[page]).forEach(([key, value]: Colors) => {
    if (!Array.isArray(value)) {
      Object.entries(colorMap[page][key]).forEach(([key2, value2]: Colors) => {
        if (!parsedMap[key]) parsedMap[key] = {};
        parsedMap[key][key2] = useColorModeValue(...(value2 as [string, string]));
      });
    } else {
      parsedMap[key] = useColorModeValue(...(value as [string, string]));
    }
  });

  return parsedMap as ColorsObject;
}
export default useColorMap;

export const Color = React.createContext({} as ColorsObject);
