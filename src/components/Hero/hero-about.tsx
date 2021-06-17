import author from '@config/author-meta.json';
import AboutText from '@config/about-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

const HeroAbout: React.FC = () => (
  <div>
    <header className="text-3xl md:text-4xl font-semibold">Hey, I&apos;m Yasin Kadir</header>
    <p className="text-secondary">
      <AboutText />
    </p>

    <div className="mt-5">
      {author.socials.map((social, index) => (
        <motion.a
          className="mx-2 my-3"
          whileHover={{ y: '-2px' }}
          href={`/${social.icon[1]}`}
          key={index.toString()}
          style={{ color: social.color }}
          target="_blank"
        >
          <FontAwesomeIcon icon={social.icon as IconProp} />
        </motion.a>
      ))}
    </div>
  </div>
);

export default HeroAbout;
