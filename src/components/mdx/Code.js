import Prism from 'prismjs';
import visit from 'unist-util-visit';

// import prism languages
import '@config/prism-languages';

function highlight(code, language) {
  language = language.replace('language-', '');
  return Prism.highlight(code, Prism.languages[language], language);
}

export function remarkCodeTitle() {
  return (tree) =>
    visit(tree, 'code', (node, index) => {
      const nodeLang = node.lang || '';

      let language = '',
        title = '';

      // split language:title from nodeLang
      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':')).replace('language-', '');
        title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
      } else {
        language = nodeLang.replace('language-', '');
      }
      if (!title) return;

      // create new node
      const titleNode = {
        type: 'html',
        value: `<div data-title>${title}</div>`,
      };

      tree.children.splice(index, 0, titleNode); // insert code title
      node.lang = language;
    });
}

export const inlineCode = ({ children, ...props }) => {
  const seperated = children.split('//', 2);
  if (seperated.length < 2) return <code>{children}</code>;
  const lang = seperated[0];
  children = seperated[1];

  const higlightedCode = highlight(children, lang);
  return (
    <code
      className={`language-${lang}`}
      dangerouslySetInnerHTML={{ __html: higlightedCode.replace('\n', '') }} // inject higlighted code and remove lines.
      {...props}
    />
  );
};

export const code = ({ className, children, ...props }) => {
  const higlightedCode = highlight(children, className);

  return (
    <code dangerouslySetInnerHTML={{ __html: higlightedCode }} /* inject higlighted code */ className={className} />
  );
};

export const pre = ({ ...props }) => <pre {...props} />;
