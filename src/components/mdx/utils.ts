import Prism from 'prismjs';

export const highlight = (code: string, language: keyof Prism.Languages) => {
  const lang = String(language).replace('language-', '');

  return Prism.highlight(code, Prism.languages[lang], lang);
};
