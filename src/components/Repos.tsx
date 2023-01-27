import { Section } from '@components/section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

import css from './css/Repos.module.css';

interface Repo {
  fork_count: number;
  lang: string;
  link: string;
  name: string;
  star: number;
  desc: string;
}

export interface ReposProps {
  repos: Repo[];
}

export const Repos: React.FC<ReposProps> = ({ repos }) => (
  <Section id="projects" header="My Github Repositories">
    <div className={css.repos}>
      {repos.map((proj, index) => (
        <div className={css.repoCard} key={index.toString()}>
          <Link href={proj.link}>
            <div className={css.repoCardInner}>
              <div className={css.repoCardField}>
                <h3 className={css.repoCardHeader}>{proj.name}</h3>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
              <p className={css.repoCardDescription}>{proj.desc}</p>
              <div className="flex mt-4 justify-between">
                <div className="flex">
                  <Image
                    width={18}
                    height={18}
                    className="rounded-md"
                    src={require(`public/icons/${proj.lang.toLowerCase()}.svg`)}
                    alt={proj.lang?.toLowerCase()}
                  />
                  <span className="inline-block mx-2">{proj.lang}</span>
                </div>
                <div className="flex items-center">
                  {/* flex items-center is more powerfull */}
                  <span className="inline-block px-2">{proj.fork_count}</span>
                  <FontAwesomeIcon icon={['fas', 'code-branch']} />
                  <span className="inline-block px-2">{proj.star}</span>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Section>
);
