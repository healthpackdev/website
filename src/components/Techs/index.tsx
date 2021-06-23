import author from '@config/author-meta.json';
import { Section } from '@components/section';
import Image from 'next/image';
import css from './Techs.module.css';
import { motion } from 'framer-motion';

const index: React.FC = () => (
  <Section id="technologies" header="Technologies I use">
    <div className={css.techs}>
      {author.techs.map((tech, index) => (
        <motion.div whileHover={{ y: -2 }} className={css.techCard} key={index.toString()}>
          <Image
            src={require(`public/icons/${tech.toLowerCase()}.svg`)}
            alt={tech.toLowerCase()}
            width={18}
            height={18}
          />
          <span className={css.techName}>{tech}</span>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default index;
