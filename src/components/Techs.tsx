import author from '@config/author-meta.json';
import { Section } from '@components/section';
import Image from 'next/image';
import css from './css/Techs.module.css';
import { useTheme } from 'next-themes';
import { getTechUrl } from '@lib/theme';

const Techs: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="technologies" header="Technologies I use">
      <div className={css.techs}>
        {author.techs.map((tech, index) => (
          <div className={css.techCard} key={index.toString()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src={getTechUrl(tech, theme)} alt={tech.name.toLowerCase()} width={18} height={18} />
            <span className={css.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Techs;
