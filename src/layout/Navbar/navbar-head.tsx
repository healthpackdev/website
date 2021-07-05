import Link from 'next/link';
import useSWR from 'swr';
import { ApiFetcher } from '@lib/fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import author from '@config/author-meta.json';

const NavbarHead = () => {
  const { data } = useSWR('/spotify', ApiFetcher);

  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <a>
          <h2 className="pl-3 mr-1 text-3xl inline-block font-semibold">Healthpack</h2>{' '}
        </a>
      </Link>

      <Link href="/spotify">
        <a>
          {data && (
            <div className="space-x-2">
              <FontAwesomeIcon
                icon={['fab', 'spotify']}
                color={author.socials.find((s) => s.icon[1] === 'spotify').color}
              />
              <span
                style={{
                  color: data.songName ? author.socials.find((s) => s.icon[1] === 'spotify').color : 'inherit',
                }}
                className="font-comic text-lg">
                {data.songName ? data.songName : 'Not Playing'}
              </span>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};
export default NavbarHead;
