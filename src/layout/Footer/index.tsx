/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import author from '@config/author-meta.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import useSWR from 'swr';

const Footer: React.FC = () => {
  const { data } = useSWR(`https://api.github.com/repos/${author.github}/website/contributors`, (...args) =>
    //@ts-ignore
    fetch(...args, {}).then((res) => res.json())
  );

  return (
    <footer className="max-w-content my-10">
      <div className="flex border-t justify-between items-center flex-col lg:flex-row text-center lg:text-left">
        <p className="text-gray-700 dark:text-gray-200 text-md order-1 lg:order-[-1] font-header">
          © {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
          <div className="inline-flex mx-1 -space-x-1">
            {data &&
              data
                .sort((a, b) => b.contributions - a.contributions)
                .map((contributer) => (
                  <a key={contributer.login} href={contributer.html_url} target="_blank" rel="noreferrer">
                    <img
                      className="inline-block rounded-full ring-2 ring-white"
                      src={contributer.avatar_url}
                      width={20}
                      height={20}
                      alt={contributer.login}
                    />
                  </a>
                ))}
          </div>{' '}
          using{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="link">
            TailwindCSS
          </a>
        </p>
        <div className="flex justify-center space-x-4 my-1">
          {author.socials.map((social, index) => (
            <Link href={`/${social.icon[1]}`} key={index.toString()}>
              <a style={{ color: social.color }}>
                <FontAwesomeIcon icon={social.icon as IconProp} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
