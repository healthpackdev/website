import { useEffect } from 'react';
import Prism from 'prismjs';

const defineLanguages = ['typescript'];
for (const definedLang of defineLanguages) {
  require(`prismjs/components/prism-${definedLang}.min`);
}

const Code = ({ className, ...props }) => {
  className = className?.trim().split(':') || [];
  const fileName = className[1];
  className = className[0]?.replace('language-', '');

  useEffect(() => {
    console.log(className);
  }, []);

  return (
    <>
      {fileName && <div className="absolute rounded-md right-0 top-0">{fileName}</div>}
      <code className={className ? `language-${className}` : null} {...props} />
    </>
  );
};

export default Code;
