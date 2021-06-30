import Prism from 'prismjs';
import visit from 'unist-util-visit';
import bytes from 'bytes';

// TODO: make it with work well virtual dom

// import prism languages
import '@config/prism-languages';

export function code() {
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

      // higlight code with prismjs
      const higlight = language ? Prism.highlight(node.value, Prism.languages[language], language) : node.value;
      // get readable size of nodeValue
      const sizeOfCode = bytes(Buffer.from(node.value).length, { unitSeperator: ' ' });

      // insert new node
      const titleNode = {
        type: 'html',
        value: `<div data-title><div>${title}</div><div>${sizeOfCode} - ${
          --higlight.split('\n').length /* */
        } satır</div></div>`,
      };

      if (title) tree.children.splice(index, 0, titleNode); // insert code title
      node.type = 'html'; // replace html type
      node.value = `<pre className="language-${language}"><code className="language-${language}">${higlight}</code></pre>`; // replace higlighted code
    });
}

export function inlineCode() {
  return (tree) =>
    visit(tree, 'inlineCode', (node) => {
      const seperated = node.value.split('//', 2);
      if (seperated.length < 2) return;
      const language = seperated[0];
      node.value = seperated[1];

      let higlight;
      if (language)
        higlight = Prism.highlight(node.value.trim(), Prism.languages[language], language).replace('\n', '');
      else return;
      node.type = 'html';
      node.value = `<code className="language-${language}" inline-higlight>${higlight}</code>`;
    });
}
