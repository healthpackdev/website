import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ScrollTop: React.FC = () => {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) setTop(false);
      else setTop(true);
    });
  }, []);

  const onClickScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      type="button"
      className={`${
        !isTop ? 'block' : 'hidden'
      } fixed !outline-none text-white bottom-5 right-5 rounded-full btn active:scale-110 transition-all w-10 h-10`}
      aria-label="up!"
      onClick={onClickScroll}>
      <FontAwesomeIcon icon={['fas', 'arrow-up']} />
    </button>
  );
};

export default ScrollTop;
