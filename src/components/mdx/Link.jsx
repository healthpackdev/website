import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function a({ className, children, href, ...p }) {
  // if element has anchor class transform it hashtag
  if (className?.includes('anchor')) {
    return (
      <a {...p} href={href} className={className}>
        <FontAwesomeIcon icon={faHashtag} className="mr-2" />
      </a>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...p} className={className}>
          {children}
        </a>
      </Link>
    );
  }
  // if doesn't spread props
  return (
    <a {...p} className={className} href={href}>
      {children}
    </a>
  );
}
