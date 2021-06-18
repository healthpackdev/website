import author from '@config/author-meta.json';
import AboutText from '@config/about-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import css from './Hero.module.css';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const HeroAbout: React.FC = () => (
  <div>
    <header className="text-3xl md:text-4xl font-semibold">Hey, I&apos;m Yasin Kadir</header>
    <p className="text-secondary">
      <AboutText />
    </p>

    <div className="mt-5 grid lg:block grid-cols-2">
      {author.socials.map((social, index) => (
        <motion.a
          className={css.social + ' no-link'}
          whileHover={{ y: -2 }}
          href={`/${social.icon[1]}`}
          key={index.toString()}
          //@ts-ignore
          style={{ '--social-color': social.color }}
          target="_blank"
        >
          <FontAwesomeIcon icon={social.icon as IconProp} /> {capitalize(social.icon[1])}
        </motion.a>
      ))}
    </div>
  </div>
);

export default HeroAbout;
