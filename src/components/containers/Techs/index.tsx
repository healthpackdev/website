import author from '@config/author-meta.json';
import { Container } from '@components/containers';
import { motion } from 'framer-motion';

const index: React.FC = () => (
  <Container id="technologies" header="Technologies I use">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-1">
      {author.techs.map((tech, index) => (
        <motion.div
          className="flex my-2 items-center py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md bg-white dark:bg-gray-700"
          whileHover={{ y: -5 }}
          key={index.toString()}
        >
          <img
            src={`/icons/${tech.toLowerCase()}.svg`}
            alt={tech.toLowerCase()}
            width={18}
            height={18}
            className="inline-block mr-2 self-center"
          />
          <span className="text-center font-semibold">{tech}</span>
        </motion.div>
      ))}
    </div>
  </Container>
);

export default index;
