import { useState } from 'react';

const CopyButton = ({ visible, text }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button onClick={onCopy} className={`btn py-0 px-4 invisible absolute right-2 top-2 ${visible ? '!visible' : ''}`}>
      <span className="font-mono">{!copied ? 'Kopyala' : 'Kopyalandı'}</span>
    </button>
  );
};

const Pre = ({ children, ...props }) => {
  const [hover, setHover] = useState(false);

  const title = children.props.title;
  const code = children.props.code;

  const onHoverEvent = () => {
    setHover(!hover);
  };

  return (
    <>
      {title && <div data-title>{title}</div>}
      <div className="relative" onMouseEnter={onHoverEvent} onMouseLeave={onHoverEvent}>
        <CopyButton visible={hover} text={code} />
        <pre {...props}>{children}</pre>
      </div>
    </>
  );
};
export default Pre;
