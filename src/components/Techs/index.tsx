import author from '@config/author-meta.json';
import { Section } from '@components/section';
import { motion } from 'framer-motion';
import Image from 'next/image';

const index: React.FC = () => (
  <Section id="technologies" header="Technologies I use">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
      {author.techs.map((tech, index) => (
        <motion.div
          className="bg-gray-100 flex my-2 items-center py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md dark:bg-gray-700"
          whileHover={{ y: -5 }}
          key={index.toString()}
        >
          <Image
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
  </Section>
);

export default index;
