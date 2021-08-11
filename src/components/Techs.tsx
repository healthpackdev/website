import { Section } from '@components/section';
import { getTechUrl, useReactiveTheme } from '@lib/theme';
import Image from 'next/image';

import author from '@config/author-meta.json';
import css from './css/Techs.module.css';

const Techs: React.FC = () => {
  const { theme } = useReactiveTheme();

  return (
    <Section id="technologies" header="Technologies I use">
      <div className={css.techs}>
        {author.techs.map((tech, index) => (
          <div className={css.techCard} key={index.toString()}>
            <Image src={getTechUrl(tech, theme)} alt={tech.name.toLowerCase()} width={18} height={18} />
            <span className={css.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Techs;
