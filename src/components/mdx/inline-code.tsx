import { highlight } from './utils';

const InlineCode = ({ children, ...props }) => {
  const seperated = children.split('//', 2);
  if (seperated.length < 2) return <code>{children}</code>;
  const lang = seperated[0];
  const code = seperated[1];

  const higlightedCode = highlight(code, lang);

  return (
    <code
      className={`language-${lang}`}
      dangerouslySetInnerHTML={{ __html: higlightedCode.replace('\n', '') }} // inject higlighted code and remove lines.
      {...props}
    />
  );
};

export default InlineCode;
