/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
// import colors from '@theme/prism';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';

interface CodeBlockProps {
  lang: 'javascript' | 'typescript' | 'css' | 'html';
}
const Code: React.FC<CodeBlockProps> = ({ lang, children, ...props }) => {
  const language = lang.replace(/language-/, '');

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code">
      <pre className="p-4" {...props}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default Code;
