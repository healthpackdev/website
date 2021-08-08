import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const getTechUrl = ({ name, dark = false }, theme: string) => {
  const icon = dark && theme === 'dark' ? `${name}-dark` : name;

  return `/icons/${icon.toLowerCase()}.svg`;
};

export const getColor = (color: string[] | string, theme: string) => {
  if (!Array.isArray(color)) return color;

  return theme === 'dark' ? color[1] : color[0];
};

export const useReactiveTheme = () => {
  const [name, setName] = useState<string>();
  const { theme, ...rest } = useTheme();

  useEffect(() => {
    if (theme) setName(theme);
  }, [theme]);

  return { theme: name, ...rest };
};
