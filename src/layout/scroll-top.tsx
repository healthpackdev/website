import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ScrollTop: React.FC = () => {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) setTop(false);
      else setTop(true);
    });
  });

  const onClickScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    !isTop && (
      <button
        type="button"
        className="fixed text-white bottom-5 right-5 w-10 h-10 rounded-full dark:bg-blue-500 bg-blue-400"
        aria-label="up!"
        onClick={onClickScroll}
      >
        <FontAwesomeIcon icon={['fas', 'arrow-up']} />
      </button>
    )
  );
};

export default ScrollTop;
