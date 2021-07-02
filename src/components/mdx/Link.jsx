import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

export default function a({ className, children, ...p }) {
  // if element has anchor class transform it hashtag
  if (className?.includes('anchor')) {
    return (
      <a {...p}>
        <FontAwesomeIcon icon={faHashtag} className="mr-2" />
      </a>
    );
  }
  // if doesn't spread props
  return (
    <a {...p} className={className}>
      {children}
    </a>
  );
}
