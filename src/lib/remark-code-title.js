import visit from 'unist-util-visit';

const remarkCodeTitle = () => {
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
};

export default remarkCodeTitle;
