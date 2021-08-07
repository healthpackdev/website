export const getTechUrl = ({ name, dark = false }, theme: string) => {
  const icon = dark && theme === 'dark' ? `${name}-dark` : name;

  return `/icons/${icon.toLowerCase()}.svg`;
};

export const getColor = (color: string[] | string, theme: string) => {
  if (!Array.isArray(color)) return color;

  return theme === 'dark' ? color[1] : color[0];
};
