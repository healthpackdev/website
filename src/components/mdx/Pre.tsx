import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <button onClick={onCopy} className={`invisible absolute right-5 top-2 ${visible ? '!visible' : ''}`}>
      <FontAwesomeIcon
        icon={['fas', copied ? 'clipboard-check' : 'clipboard']}
        className="!w-6 !h-6"
        color={copied ? 'rgb(52, 211, 153)' : null}
      />
    </button>
  );
};

const Pre = ({ children, ...props }) => {
  const [hover, setHover] = useState(false);
  const code = children.props.children;

  const onHoverEvent = () => {
    setHover(!hover);
  };

  return (
    <div className="relative" onMouseEnter={onHoverEvent} onMouseLeave={onHoverEvent}>
      <CopyButton visible={hover} text={code} />
      <pre {...props}>{children}</pre>
    </div>
  );
};
export default Pre;
