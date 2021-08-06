import { highlight } from './utils';

const Code = ({ className, children, ...props }) => {
  const higlightedCode = highlight(children, className);

  return (
    <code
      {...props}
      dangerouslySetInnerHTML={{ __html: higlightedCode }}
      /* inject higlighted code */ className={className}
    />
  );
};

export default Code;
