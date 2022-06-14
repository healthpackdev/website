import { visit } from 'unist-util-visit';
import { refractor } from 'refractor';
import jsx from 'refractor/lang/jsx';

refractor.register(jsx);

const highlight = (code: string, className: string) => {
  return refractor.highlight(code, className.replace('language-', ''));
};

export const rehypeSyntaxHighlight = () => (tree) => {
  return visit(tree, 'element', (node) => {
    if (node.tagName !== 'code' && node.tagName !== 'inlineCode') return;

    const value = node.children[0].value;

    if (node.tagName === 'code') {
      const classNames = node.properties.className;
      if (!classNames) return;

      node.children = highlight(value, classNames[0]).children;
      node.properties.code = value;
    } else if (node.tagName === 'inlineCode') {
      const langAndCode = value.split('//');

      if (langAndCode.length < 2) return;

      const lang = langAndCode[0];
      const code = langAndCode.slice(1).join('//');

      node.children = highlight(code, lang).children;
    }
  });
};
