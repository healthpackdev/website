const colors = {
  char: {
    css: ['selector', 'char', 'builtin', 'inserted'],
    color: '#D8DEE9',
  },
  comment: {
    css: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
    color: '#B2B2B2',
  },
  keyword: {
    css: ['keyword'],
    color: '#c5a5c5',
  },
  lineHighlight: {
    css: ['none'],
    color: '#353b45',
  }, // 353b45
  primitive: {
    css: ['property', 'number', 'deleted', 'function-name', 'constant', 'symbol'],
    color: '#5a9bcf',
  },
  string: {
    css: ['string', 'attr-value'],
    color: '#8dc891',
  },
  variable: {
    css: ['operator', 'entity', 'url', 'variable'],
    color: '#d7deea',
  },
  boolean: {
    css: ['boolean'],
    color: '#ff8b50',
  },
  punctuation: {
    css: ['punctuation'],
    color: '#88C6BE',
  },
  tag: {
    css: ['tag'],
    color: '#fc929e',
  },
  function: {
    css: ['function'],
    color: '#79b6f2',
  },
  className: {
    css: ['atrule', 'class-name'],
    color: '#FAC863',
  },
  method: {
    css: ['none'],
    color: '#6699CC',
  },
  operator: {
    css: ['none'],
    color: '#fc929e',
  },
};
// Theme Extended from https://github.com/reactjs/reactjs.org/blob/master/src/prism-styles.js

export default colors;
// for blog
