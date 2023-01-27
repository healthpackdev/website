import { apiFetch } from '@lib/fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useSWR from 'swr';

import author from '@config/author-meta.json';

const color = author.socials.find((s) => s.icon === 'spotify').color as string;

const NavbarHead = () => {
  const { data } = useSWR('/spotify', apiFetch);

  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <h2 className="pl-3 mr-1 text-3xl inline-block font-semibold">Healthpack</h2>{' '}
      </Link>

      <Link href="/spotify">
        {data && (
          <div className="text-right space-x-2 font-comic text-lg">
            <FontAwesomeIcon icon={['fab', 'spotify']} color={color} />
            {data.songName ? (
              <span
                style={{
                  color,
                }}>
                {data.songName} <br />
                <span className="text-yellow-500">{data.artists.join(' - ')}</span>
              </span>
            ) : (
              <span>Not Playing</span>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};
export default NavbarHead;
