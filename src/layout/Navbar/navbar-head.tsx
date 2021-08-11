import { apiFetch } from '@lib/fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import author from '@config/author-meta.json';

const NavbarHead = () => {
  const { data } = useSWR('/spotify', apiFetch);
  const color = useMemo(() => author.socials.find((s) => s.icon === 'spotify'), []).color as string;

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
        </a>
      </Link>
    </div>
  );
};
export default NavbarHead;
