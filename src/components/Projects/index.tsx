import Link from 'next/link';
import { Section } from '@components/section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import type { ErrorOrRepo } from '../../pages/index';

interface ProjectsProps {
  readonly projects: ErrorOrRepo;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Section id="projects" header="My Github projects">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {typeof projects !== 'string' ? (
        projects.map((proj, index) => (
          <motion.div
            className="cursor-pointer shadow-md rounded-md bg-gray-100 dark:bg-gray-700"
            whileHover={{ y: -5 }}
            key={index.toString()}
          >
            <Link href={proj.link}>
              <div className="flex flex-col py-2 px-4 justify-between">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-blue-500 font-medium">{proj.name}</h3>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </div>
                <p className="text-gray-800 dark:text-blueGray-50 line-clamp-2" /* noOfLines={2}> */>{proj.desc}</p>
                <div className="flex mt-4 justify-between">
                  <div className="flex">
                    <img
                      width={18}
                      height={18}
                      className="mr-2 inline-block"
                      src={`/icons/${proj.lang?.toLowerCase()}.svg`}
                      alt={proj.lang?.toLowerCase()}
                    />
                    <span>{proj.lang}</span>
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
          </motion.div>
        ))
      ) : (
        <div className="text-center">{projects}</div>
      )}
    </div>
  </Section>
);

export default Projects;
