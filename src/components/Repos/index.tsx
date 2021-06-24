import Link from 'next/link';
import { Section } from '@components/section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ErrorOrRepo } from '../../pages/index';
import Image from 'next/image';
import css from './Repos.module.css';
import { motion } from 'framer-motion';

interface RepositoriesProps {
  readonly repos: ErrorOrRepo;
}

const Repositories: React.FC<RepositoriesProps> = ({ repos }) => (
  <Section id="projects" header="My Github Repositories">
    <div className={css.repos}>
      {typeof repos !== 'string' ? (
        repos.map((proj, index) => (
          <motion.div whileHover={{ y: -2 }} className={css.repoCard} key={index.toString()}>
            <Link href={proj.link}>
              <a className="no-link">
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
              </a>
            </Link>
          </motion.div>
        ))
      ) : (
        <div className="text-center">{repos}</div>
      )}
    </div>
  </Section>
);

export default Repositories;
