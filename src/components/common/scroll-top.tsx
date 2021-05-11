import { IconButton } from '@chakra-ui/react';
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
      <IconButton
        variant="solid"
        borderRadius="full"
        icon={<FontAwesomeIcon icon={['fas', 'arrow-up']} />}
        position="fixed"
        bottom="20px"
        right="20px"
        aria-label="Yukarı Çık!"
        onClick={onClickScroll}
      />
    )
  );
};

export default ScrollTop;
